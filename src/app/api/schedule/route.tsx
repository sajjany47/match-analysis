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

    return Response.json({ data: filterMatches }, { status: 200 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
