import { notFound } from "next/navigation";
import PlayerHeader from "./component/PlayerHeader";
import PlayerStats from "./component/PlayerStats";
import MatchHistory from "./component/MatchHistory";

// Mock data - in a real app, you'd fetch this from an API
const getPlayerData = (id: string) => {
  console.log(id);
  const player = {
    id: 1968,
    name: "Aiden Markram",
    shortName: "A Markram",
    batStyle: "Right Handed",
    bowlStyle: "Off break",
    imageUrl: {
      src: "https://d13ir53smqqeyp.cloudfront.net/fc-player-images/1968.png",
    },
    age: 29,
    nationality: "South Africa",
    role: "Batsman",
    teams: ["South Africa", "Sunrisers Hyderabad", "Paarl Royals"],
    debut: "2017-09-28",
  };

  const matchHistory = Array.from({ length: 20 }, (_, i) => ({
    date: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    match: `Match ${i + 1}`,
    opponent: ["Australia", "India", "England", "New Zealand", "Pakistan"][
      i % 5
    ],
    format: ["ODI", "T20", "Test", "IPL"][i % 4],
    batting: {
      runs: Math.floor(Math.random() * 120),
      balls: Math.floor(Math.random() * 100),
      fours: Math.floor(Math.random() * 10),
      sixes: Math.floor(Math.random() * 5),
      out: Math.random() > 0.3,
    },
    bowling: {
      overs: (Math.random() * 10).toFixed(1),
      maidens: Math.floor(Math.random() * 2),
      runs: Math.floor(Math.random() * 50),
      wickets: Math.floor(Math.random() * 4),
      economy: (Math.random() * 10).toFixed(1),
    },
    result: ["Won", "Lost", "No result", "Drawn"][i % 4],
  }));

  const careerStats = {
    batting: {
      test: {
        matches: 36,
        innings: 62,
        runs: 2465,
        highest: "152",
        average: 41.08,
        strikeRate: 56.23,
        centuries: 6,
        fifties: 10,
        fours: 285,
        sixes: 18,
      },
      odi: {
        matches: 54,
        innings: 52,
        runs: 1954,
        highest: "175",
        average: 39.08,
        strikeRate: 89.45,
        centuries: 3,
        fifties: 12,
        fours: 185,
        sixes: 32,
      },
      t20: {
        matches: 42,
        innings: 40,
        runs: 1120,
        highest: "92*",
        average: 32.94,
        strikeRate: 142.45,
        centuries: 0,
        fifties: 8,
        fours: 105,
        sixes: 42,
      },
      ipl: {
        matches: 48,
        innings: 46,
        runs: 1250,
        highest: "98*",
        average: 30.48,
        strikeRate: 138.72,
        centuries: 0,
        fifties: 9,
        fours: 115,
        sixes: 45,
      },
    },
    bowling: {
      test: {
        matches: 36,
        innings: 42,
        wickets: 12,
        best: "3/45",
        average: 52.41,
        economy: 3.12,
        strikeRate: 100.8,
        fiveWickets: 0,
      },
      odi: {
        matches: 54,
        innings: 30,
        wickets: 18,
        best: "2/22",
        average: 42.33,
        economy: 5.12,
        strikeRate: 49.6,
        fiveWickets: 0,
      },
      t20: {
        matches: 42,
        innings: 15,
        wickets: 8,
        best: "2/15",
        average: 38.75,
        economy: 7.45,
        strikeRate: 31.2,
        fiveWickets: 0,
      },
      ipl: {
        matches: 48,
        innings: 20,
        wickets: 10,
        best: "2/18",
        average: 40.2,
        economy: 7.88,
        strikeRate: 30.6,
        fiveWickets: 0,
      },
    },
    fielding: {
      catches: 68,
      stumpings: 0,
    },
  };

  return { player, matchHistory, careerStats };
};

export default function CricketPlayer({ params }: { params: { id: string } }) {
  const { player, matchHistory, careerStats } = getPlayerData(params.id);

  if (!player) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PlayerHeader player={player} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <PlayerStats stats={careerStats} />
        </div>
        <div className="lg:col-span-1">
          <MatchHistory matches={matchHistory} />
        </div>
      </div>
    </div>
  );
}
