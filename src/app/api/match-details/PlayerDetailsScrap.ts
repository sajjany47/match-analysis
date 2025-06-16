import { GetHtml } from "@/lib/utils";

export const PlayerDetails = async () => {
  const playerName = "Virat Kohli";
  const url = `https://search.espncricinfo.com/ci/content/site/search.html?search=${playerName}`;

  const $ = await GetHtml(url);

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

  if (playerList.length === 0) {
    throw new Error("No players found");
  }

  const $B = await GetHtml(playerList[0].url);
  console.log($B.html());

  const playerDetails: Record<string, string> = {};
  const teamArray: { name: string; logo: string | null }[] = [];

  $B(".ds-grid.ds-gap-4 > div").each((_, element) => {
    const label = $B(element).find("p").first().text().trim();
    const value = $B(element).find("span > p").text().trim();
    if (label && value) {
      playerDetails[label] = value;
    }
  });

  $B(".ds-grid.ds-gap-y-4 a").each((_, el) => {
    const teamName = $B(el).find("span span").text().trim();
    const logoUrl = $B(el).find("img").attr("src") || null;

    if (teamName) {
      teamArray.push({
        name: teamName,
        logo: logoUrl,
      });
    }
  });

  // console.log({
  //   playerDetails,
  //   teams: teamArray,
  // });
  return playerList;
};
