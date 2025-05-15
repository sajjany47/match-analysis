import { load } from "cheerio";
import axios from "axios";
import moment from "moment";
import dbConnect from "@/lib/db";

export async function GET() {
  const TARGET_URL =
    "https://www.cricbuzz.com/cricket-schedule/upcoming-series/all";
  try {
    await dbConnect();
    const { data } = await axios.get(TARGET_URL);

    const $ = load(data);

    const matches: any = [];
    const today = moment().format("YYYY-MM-DD");

    $("#all-list .cb-lv-grn-strip").each((_, dateElem) => {
      const date = $(dateElem).text().trim();
      const matchesList = $(dateElem).nextUntil(
        ".cb-lv-grn-strip",
        ".cb-col-100.cb-col"
      );

      matchesList.each((_, matchElem) => {
        const matchElemName = $(matchElem).find(".cb-mtchs-dy-vnu a").first();
        const timeElem = $(matchElem)
          .find(".cb-mtchs-dy-tm .cb-font-12.text-gray")
          .first();
        const groundElem = $(matchElem)
          .find('.cb-mtchs-dy-vnu [itemprop="location"] [itemprop="name"]')
          .first();
        const locationElem = $(matchElem)
          .find(
            '.cb-mtchs-dy-vnu [itemprop="location"] [itemprop="addressLocality"]'
          )
          .first();

        const matchName = matchElemName.text().trim();
        const matchHref =
          "https://www.cricbuzz.com" + matchElemName.attr("href")?.trim() || "";

        const times = timeElem.text().replace(/\s+/g, " ").trim();
        const [gmtTimeMatch, localTimeMatch] =
          times.match(/(\d{1,2}:\d{2}\s[AP]M)/g) || [];
        const groundName = groundElem.text().replace(",", "").trim();
        const location = locationElem.text().replace(",", "").trim();
        matches.push({
          date,
          matchName,
          matchHref,
          ground: `${groundName}, ${location}`,
          gmtTime: gmtTimeMatch || null,
          localTime: localTimeMatch || null,
        });
      });
    });

    return Response.json({ date: today, matches });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Scraping failed" }, { status: 500 });
  }
}
