import { GetHtml } from "@/lib/utils";
import axios from "axios";
import { load } from "cheerio";
import {
  BattingForm,
  BattingStats,
  BowlingForm,
  BowlingStats,
  FantasyStats,
  OverallStats,
} from "./PerformanceDetail";

export const NewPlayerDetails = async (name: string) => {
  const url = "https://advancecricket.com/player-load";
  const formData = new FormData();
  formData.append("text", name);
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
      // "Against Teams",
      // "Against Teams On Stadiums",
    ];
    const result: { name: string; url: string }[] = [
      { name: "Overall Stats", url: playerList[0].url },
    ];

    getInfoUrl(".dropdown-menu a").each((_, el) => {
      const name = getInfoUrl(el).text().trim();
      const href = getInfoUrl(el).attr("href") || "";

      if (requiredNames.includes(name)) {
        result.push({ name, url: href });
      }
    });

    const statData: {
      fantasyPoints: any[];
      battingForm: any[];
      bowlingForm: any[];
      battingStats: any[];
      bowlingStats: any[];
      overallStats: any;
    } = {
      fantasyPoints: [],
      battingForm: [],
      bowlingForm: [],
      battingStats: [],
      bowlingStats: [],
      overallStats: {},
    };
    await Promise.all(
      result.map(async (item) => {
        switch (item.name) {
          case "Dream11 Points":
            statData.fantasyPoints = await FantasyStats(item.url);
            break;
          case "Batting Form":
            statData.battingForm = await BattingForm(item.url);
            break;
          case "Bowling Form":
            statData.bowlingForm = await BowlingForm(item.url);
            break;
          case "Batting Stats":
            statData.battingStats = await BattingStats(item.url);
            break;
          case "Bowling Stats":
            statData.bowlingStats = await BowlingStats(item.url);
            break;
          case "Overall Stats":
            statData.overallStats = await OverallStats(item.url);
            break;
        }
      })
    );

    return statData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
