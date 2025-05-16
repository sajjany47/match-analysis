import axios from "axios";
import { NextRequest } from "next/server";
import { load } from "cheerio";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const TARGET_URL = body.url;

    const { data } = await axios.get(TARGET_URL);
    const $ = load(data);

    const team1 = $(".cb-team1 .pad5").last().text().trim();
    const team2 = $(".cb-team2 .pad5").last().text().trim();

    const team1Squad: any = { team1: team1, team1Squad: [] };

    const team2Squad: any = { team2: team2, team2Squad: [] };

    $(".cb-sqds-lft-col .cb-player-card-left").each((i, elem) => {
      const name = $(elem)
        .find(".cb-player-name-left div")
        .first()
        .text()
        .trim();
      const role = $(elem)
        .find(".cb-player-name-left .cb-font-12")
        .text()
        .trim();
      const imageUrl = $(elem).find("img").attr("src");

      team1Squad.team1Squad.push({ name, role, imageUrl });
    });
    $(".cb-sqds-lft-col .cb-player-card-right").each((i, elem) => {
      const name = $(elem)
        .find(".cb-player-name-right div")
        .first()
        .text()
        .trim();
      const role = $(elem)
        .find(".cb-player-name-right .cb-font-12")
        .text()
        .trim();
      const imageUrl = $(elem).find("img").attr("src");

      team2Squad.team2Squad.push({ name, role, imageUrl });
    });

    return Response.json(
      { data: [{ ...team1Squad }, { ...team2Squad }] },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
