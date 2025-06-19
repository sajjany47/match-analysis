import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { load } from "cheerio";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ExtractTeams = async (sentence: any) => {
  // Remove everything after the comma
  const cleaned = sentence.split(",")[0].trim();

  // Extract team names (split by 'vs' case-insensitive)
  const [team1, team2] = cleaned.split(/vs/i).map((s: any) => s.trim());
  const tema1Details: any = await CountryDetails(team1);
  const tema2Details: any = await CountryDetails(team2);

  return {
    team1: team1,
    team2: team2,
    team1ShortName: tema1Details.shortName || null,
    team1Name: tema1Details.name || null,
    team1Flag: tema1Details.flag || null,
    team2ShortName: tema2Details.shortName || null,
    team2Name: tema2Details.name || null,
    team2Flag: tema2Details.flag || null,
  };
};

export const CountryDetails = async (countryName: string) => {
  try {
    const cleanedCountryName = countryName
      .toLowerCase()
      .replace(/\b(women|xi|a)\b/gi, "")
      .trim();
    const details = await axios.get(
      `https://restcountries.com/v3.1/name/${cleanedCountryName}`
    );

    return {
      shortName: details.data[0].cioc || null,
      flag: details.data[0].flags.svg || null,
      name: details.data[0].name.common || null,
    };
  } catch (error) {
    console.error(`Error fetching country details for ${countryName}:`, error);
    return {
      shortName: null,
      flag: null,
      name: null,
    };
  }
};

export const GetHtml = async (url: string) => {
  const response = await axios.get(url);
  const data = response.data;
  const $ = load(data);

  return $;
};

export const GetPSearchList = async (searchTerm: string, type?: string) => {
  const url = "https://advancecricket.com/player-load";
  const formData = new FormData();

  if (type) {
    formData.append("stadium", type);
  } else {
    formData.append("text", searchTerm);
  }
  try {
    const { data } = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const $ = load(data);
    const playerList: { name: string; url: string }[] = [];

    $("a[title$='Stats']").each((_, el) => {
      const name = $(el).find("b.card-title").text().trim();
      const href = $(el).attr("href");

      if (name && href) {
        playerList.push({
          name,
          url: href.startsWith("http")
            ? href
            : `https://advancecricket.com${href}`,
        });
      }
    });
    if (type) {
      console.log(playerList);
    }
    if (playerList.length === 0) {
      throw new Error("No players found");
    }
    return playerList[0]; // Return the first player found
  } catch (error) {
    console.error(
      `Error fetching player search list for ${searchTerm}:`,
      error
    );
    return [];
  }
};
