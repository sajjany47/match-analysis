import axios from "axios";
import moment from "moment";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date") || moment().format("YYYY-MM-DD");

    const data = (
      await axios.get(
        "https://cricketnext.nw18.com/sports/csr/feed/schedule_by_date_en.json"
      )
    ).data;
    const filterMatches = data.find(
      (item: any) =>
        moment(item.name, "ddd, MMM DD YYYY").format("YYYY-MM-DD") ===
        moment(date, "YYYY-MM-DD").format("YYYY-MM-DD")
    );

    const prepareData = (filterMatches.match ?? []).map((item: any) => ({
      _id: item.matchId,
      seriesName: item.seriesname,
      seriesCode: item.seriesShortName,
      sport: "Cricket",
      format: item.matchtype,
      team1: {
        id: item.teamaId,
        name: item.teama,
        logo: "https://flagcdn.com/w320/in.png",
        code: item.teamaShort,
      },
      team2: {
        id: item.teambId,
        name: item.teamb,
        logo: "https://flagcdn.com/w320/au.png",
        code: item.teambShort,
      },

      dateTime: {
        local: moment
          .unix(item.match_start_datetime)
          .format("Do MMM, YYYY HH:mm"),
        utc: moment.unix(item.match_start_datetime),
      },
      matchStatus: "Upcoming",
      venue: {
        name: item.venue,
      },
    }));

    return Response.json({ data: prepareData }, { status: 200 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
