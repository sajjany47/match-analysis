import { GetHtml } from "@/lib/utils";
import axios from "axios";
import { load } from "cheerio";
import {
  BatDetails,
  BattingStat,
  BowlingDetails,
  BowlingStat,
} from "./PerformanceDetail";

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
    const requiredNames = [
      "Dream11 Points",
      "Batting Form",
      "Bowling Form",
      "Batting Stats",
      "Bowling Stats",
      "Against Teams",
      "Against Teams On Stadiums",
    ];
    const result: { name: string; url: string }[] = [];

    getInfoUrl(".dropdown-menu a").each((_, el) => {
      const name = getInfoUrl(el).text().trim();
      const href = getInfoUrl(el).attr("href") || "";

      if (requiredNames.includes(name)) {
        result.push({ name, url: href });
      }
    });
    // console.log(result);

    // const test = await BowlingStat(
    //   "https://advancecricket.com/cricketer-stats/virat-kohli/83755737-2#virat-kohli-bowling-stats"
    // );
    // console.log(test);

    return playerList;
  } catch (error) {
    console.error("Error fetching player details:", error);
    throw error;
  }
};
