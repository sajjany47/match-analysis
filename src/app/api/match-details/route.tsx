import axios from "axios";
import { NextRequest } from "next/server";
import { PlayerDetails } from "./PlayerDetailsScrap";

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
    console.log(searchPlayerList);

    return Response.json(
      { data: { squadList: squadList.data.data.squadSegment } },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
