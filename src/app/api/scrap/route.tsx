import * as cheerio from "cheerio";
import axios from "axios";
import moment from "moment";

export async function GET() {
  const TARGET_URL = "https://www.espncricinfo.com/live-cricket-score";
  try {
    const { data } = await axios.get(TARGET_URL);
    console.log(data);
    const $ = cheerio.load(data);

    const matches: any = [];
    const today = moment().format("YYYY-MM-DD");

    $(".ds-px-4.ds-py-3 > a").each((_, element) => {
      const matchTitle = $(element)
        .find(".ds-text-tight-m")
        .first()
        .text()
        .trim();
      const teams = $(element)
        .find(".ds-text-tight-s")
        .map((i, el) => $(el).text())
        .get()
        .join(" vs ");

      const status = $(element)
        .find(".ds-truncate.ds-text-typo-title")
        .text()
        .trim();

      matches.push({
        title: matchTitle || teams,
        status: status || "Status not available",
        source: "ESPN Cricinfo",
      });
    });

    return Response.json({ date: today, matches });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Scraping failed" }, { status: 500 });
  }
}
