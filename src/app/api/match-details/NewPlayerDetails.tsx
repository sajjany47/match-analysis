import axios from "axios";
import { load } from "cheerio";

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
    console.log(playerList);
    return playerList;
  } catch (error) {
    console.error("Error fetching player details:", error);
    throw error;
  }
};
