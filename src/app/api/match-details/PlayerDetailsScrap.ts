import axios from "axios";
import { load } from "cheerio";

export const PlayerDetails = async () => {
  const playerName = "Virat Kohli";
  const url = `https://search.espncricinfo.com/ci/content/site/search.html?search=${playerName}`;

  const { data } = await axios.get(url);
  const $ = load(data);

  const playerList: { name: string; url: string; dob: string }[] = [];
  $(".player-list li").each((index, element) => {
    const dobText = $(element).find("p.alphabetical-name").text().trim(); // e.g., "Sachin Tendulkar, 1973- "
    const name = $(element).find("h3.name a").text().trim(); // e.g., "Tendulkar, SR"
    const url = $(element).find("h3.name a").attr("href");

    // Extract DOB from text, assuming it's at the end after the comma
    const dobMatch = dobText.match(/,\s*(\d{4}-?)\s*$/);
    const dob = dobMatch ? dobMatch[1] : "";

    if (name && url) {
      playerList.push({
        name,
        url,
        dob,
      });
    }
  });

  return playerList;
};
