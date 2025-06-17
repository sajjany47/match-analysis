import { GetHtml } from "@/lib/utils";

export const BatDetails = async (url: string) => {
  const $ = await GetHtml(url);
  const matches: any = [];

  // Find the first table inside the tab-pane with id ending in '-batting'
  const table = $('div.tab-pane[id$="-batting"] table');

  table.find("tbody tr").each((_, row) => {
    const columns = $(row).find("td");

    const date = $(columns[0]).text().trim();
    const match = $(columns[1]).text().trim();

    if ($(columns[2]).attr("colspan") === "5") {
      matches.push({
        date,
        match,
        bo: "DNB",
        run: "DNB",
        fours_sixes: "DNB",
        sr: "DNB",
        out: "DNB",
      });
    } else {
      matches.push({
        date,
        match,
        bo: $(columns[2]).text().trim(),
        run: $(columns[3]).text().trim(),
        fours_sixes: $(columns[4]).text().trim(),
        sr: $(columns[5]).text().trim(),
        out: $(columns[6]).text().trim(),
      });
    }
  });
  // matches.push({
  //   date,
  //   match,
  //   run,
  //   bo,
  //   fours_sixes,
  //   sr,
  //   out,
  // });

  return matches;
};

export const BowlingDetails = async (url: string) => {
  const $ = await GetHtml(url);
  const bowlingStats: any = [];

  // Select bowling table using ID ending in -bowling
  const table = $('div.tab-pane[id$="-bowling"] table');

  table.find("tbody tr").each((_, row) => {
    const columns = $(row).find("td");
    const date = $(columns[0]).text().trim();
    const match = $(columns[1]).text().trim();

    // Handle "DNB" case (colspan = 5)
    if ($(columns[2]).attr("colspan") === "5") {
      bowlingStats.push({
        date,
        match,
        o: "DNB",
        r: "DNB",
        w: "DNB",
        m: "DNB",
        eco: "DNB",
      });
    } else {
      bowlingStats.push({
        date,
        match,
        o: $(columns[2]).text().trim(),
        r: $(columns[3]).text().trim(),
        w: $(columns[4]).text().trim(),
        m: $(columns[5]).text().trim(),
        eco: $(columns[6]).text().trim(),
      });
    }
  });
  return bowlingStats;
};

export const BattingStat = async (url: string) => {
  const $ = await GetHtml(url);
  const result: any = [];

  // Target only rows with class 'tsuccess' inside the correct table
  const tableRows = $("div[id$='-batting-stats'] table tbody tr.tsuccess");

  tableRows.each((_, row) => {
    const cols = $(row).find("td");

    if (cols.length >= 14) {
      result.push({
        year: $(cols[0]).text().trim(),
        mode: $(cols[1]).text().trim(),
        matches: $(cols[2]).text().trim(),
        innings: $(cols[3]).text().trim(),
        runs: $(cols[4]).text().trim(),
        balls: $(cols[5]).text().trim(),
        notOut: $(cols[6]).text().trim(),
        average: $(cols[7]).text().trim(),
        strikeRate: $(cols[8]).text().trim(),
        highScore: $(cols[9]).text().trim(),
        fifty: $(cols[10]).text().trim(),
        hundred: $(cols[11]).text().trim(),
        fours: $(cols[12]).text().trim(),
        sixes: $(cols[13]).text().trim(),
      });
    }
  });

  return result;
};

export const BowlingStat = async (url: string) => {
  const $ = await GetHtml(url);
  const result: any[] = [];

  // Select table rows with class 'tsuccess' inside any div ending with '-bowling-stats'
  const tableRows = $("div[id$='-bowling-stats'] table tbody tr.tsuccess");

  tableRows.each((_, row) => {
    const cols = $(row).find("td");

    if (cols.length >= 13) {
      result.push({
        year: $(cols[0]).text().trim(),
        mode: $(cols[1]).text().trim(),
        matches: $(cols[2]).text().trim(),
        innings: $(cols[3]).text().trim(),
        balls: $(cols[4]).text().trim(),
        runs: $(cols[5]).text().trim(),
        wicket: $(cols[6]).text().trim(),
        strikeRate: $(cols[7]).text().trim(),
        twoWicket: $(cols[8]).text().trim(),
        threeWicket: $(cols[9]).text().trim(),
        fiveWicket: $(cols[10]).text().trim(),
        economy: $(cols[11]).text().trim(),
        average: $(cols[12]).text().trim(),
      });
    }
  });

  return result;
};
