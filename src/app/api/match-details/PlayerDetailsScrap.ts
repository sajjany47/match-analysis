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

  // const response: any = await GetHtml(playerList[0].url);

  // const $B = load(response.data);

  // const playerPersonalDetails: any = {
  //   basicInfo: {},
  //   teams: [],
  // };

  // // Basic Information
  // playerPersonalDetails.basicInfo.fullName = $B(
  //   'span.ds-text-title-s:contains("Full Name")'
  // )
  //   .next()
  //   .text()
  //   .trim();
  // playerPersonalDetails.basicInfo.born = $B(
  //   'span.ds-text-title-s:contains("Born")'
  // )
  //   .next()
  //   .text()
  //   .trim();
  // playerPersonalDetails.basicInfo.age = $B(
  //   'span.ds-text-title-s:contains("Age")'
  // )
  //   .next()
  //   .text()
  //   .trim();
  // playerPersonalDetails.basicInfo.battingStyle = $B(
  //   'span.ds-text-title-s:contains("Batting Style")'
  // )
  //   .next()
  //   .text()
  //   .trim();
  // playerPersonalDetails.basicInfo.bowlingStyle = $B(
  //   'span.ds-text-title-s:contains("Bowling Style")'
  // )
  //   .next()
  //   .text()
  //   .trim();
  // playerPersonalDetails.basicInfo.playingRole = $B(
  //   'span.ds-text-title-s:contains("Playing Role")'
  // )
  //   .next()
  //   .text()
  //   .trim();

  // $B('a[href^="/team/"]').each((i, el) => {
  //   const teamElement = $B(el);
  //   const teamName = teamElement.find("span.ds-text-title-s").text().trim();

  //   // Get flag image URL
  //   let flagUrl = "";
  //   const imgElement = teamElement.find("img.overview-teams-image");
  //   if (imgElement.length) {
  //     flagUrl = imgElement.attr("src") || "";
  //     // Handle lazy loading images
  //     if (flagUrl.includes("lazyimage-noaspect.svg")) {
  //       flagUrl = imgElement.attr("data-src") || "";
  //     }
  //   } else {
  //     // For teams with icon instead of image
  //     const iconElement = teamElement.find("i.icon-shield-filled");
  //     if (iconElement.length) {
  //       flagUrl = "icon"; // Mark as icon
  //     }
  //   }

  //   if (
  //     teamName &&
  //     !playerPersonalDetails.teams.some((t: any) => t.name === teamName)
  //   ) {
  //     playerPersonalDetails.teams.push({
  //       name: teamName,
  //       flagUrl: flagUrl,
  //     });
  //   }
  // });

  return playerList;
};
