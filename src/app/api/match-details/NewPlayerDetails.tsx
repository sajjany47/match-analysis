import { GetHtml } from "@/lib/utils";
import axios from "axios";
import { load } from "cheerio";

export const NewPlayerDetails = async () => {
  const url = "https://advancecricket.com/player-load";
  const formData = new FormData();
  formData.append("text", "virat kohli");
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

    if (playerList.length === 0) {
      throw new Error("No players found");
    }
    const getInfoUrl = await GetHtml(playerList[0].url);
    const links = {
      battingForm: "",
      bowlingForm: "",
      dream11Points: "",
      recentMatch: "",
    };

    getInfoUrl("ul.dropdown-menu a.dropdown-item").each((_, el) => {
      const title = getInfoUrl(el).attr("title")?.toLowerCase() || "";
      const href = getInfoUrl(el).attr("href");

      if (title.includes("batting")) {
        links.battingForm = href?.startsWith("http")
          ? href
          : `https://advancecricket.com${href}`;
      } else if (title.includes("bowling")) {
        links.bowlingForm = href?.startsWith("http")
          ? href
          : `https://advancecricket.com${href}`;
      } else if (title.includes("dream11")) {
        links.dream11Points = href?.startsWith("http")
          ? href
          : `https://advancecricket.com${href}`;
      } else if (title.includes("recent")) {
        links.recentMatch = href?.startsWith("http")
          ? href
          : `https://advancecricket.com${href}`;
      }
    });
    console.log(links);
    return playerList;
  } catch (error) {
    console.error("Error fetching player details:", error);
    throw error;
  }
};
