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
    let fantasyPoints: any[] = [];
    let battingForm: any[] = [];
    let bowlingForm: any[] = [];
    let battingStats: any[] = [];
    let bowlingStats: any[] = [];
    let overallStats: any = {};

    const prepareData = await Promise.all(
      result.map(async (item) => {
        if (item.name === "Dream11 Points") {
          fantasyPoints = await FantasyStats(item.url);
          return fantasyPoints;
        }
        if (item.name === "Batting Form") {
          battingForm = await BattingForm(item.url);
          return battingForm;
        }
        if (item.name === "Bowling Form") {
          bowlingForm = await BowlingForm(item.url);
          return bowlingForm;
        }
        if (item.name === "Batting Stats") {
          battingStats = await BattingStats(item.url);
          return battingStats;
        }
        if (item.name === "Bowling Stats") {
          bowlingStats = await BowlingStats(item.url);
          return bowlingStats;
        }
        if (item.name === "Overall Stats") {
          overallStats = await OverallStats(item.url);
          return overallStats;
        }
      })
    );

    return {
      fantasyPoints,
      battingForm,
      bowlingForm,
      battingStats,
      bowlingStats,
      overallStats,
    };
  } catch (error) {
    console.log(error);
    return [];
  }
};
