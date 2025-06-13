import axios from "axios";
import { NextRequest } from "next/server";
import { PlayerDetails } from "./PlayerDetailsScrap";
import moment from "moment";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const payload = {
      operationName: "Squads",
      operation: "query",
      variables: {
        matchId: body.matchId,
      },
      query:
        "fragment SquadPlayer on SquadPlayer {\n  id\n  name\n  shortName\n  batStyle\n  bowlStyle\n  imageUrl {\n    src\n  }\n  type\n}\n\nquery Squads($matchId: Int!) {\n  squadSegment(matchId: $matchId) {\n    flag {\n      src\n    }\n    color\n    shortName\n    playingPlayers {\n      ...SquadPlayer\n    }\n    benchPlayers {\n      ...SquadPlayer\n    }\n  }\n}\n        ",
    };

    const squadList = await axios.post(
      "https://www.fancode.com/graphql",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const searchPlayerList = await PlayerDetails();
    // console.log(searchPlayerList);

    const date = moment().utc().unix();
    const response = await axios.get(
      "https://hs-consumer-api.espncricinfo.com/v1/pages/player/matches?playerId=253802",
      {
        headers: {
          "x-hsci-auth-token": `exp=${date}~hmac=2c9a8d23b48db093d46eea6d711d75164029c29a27f0d567a42a50b6ff1c1dc7`, // replace with fresh token
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
          Accept: "*/*",
          Origin: "https://www.espncricinfo.com",
          Referer: "https://www.espncricinfo.com/",
        },
      }
    );

    console.log(response.data);

    return Response.json(
      { data: { squadList: squadList.data.data.squadSegment } },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
