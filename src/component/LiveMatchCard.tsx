/* eslint-disable @next/next/no-img-element */
import { Match } from "@/lib/CricketData";
import Link from "next/link";

const LiveMatchCard = ({ match }: { match: Match }) => {
  const team1: any = match.teams[0];
  const team2: any = match.teams[1];

  // Helper function to format score
  const formatScore = (team: typeof team1) => {
    if (!team.cricketScore || team.cricketScore.length === 0) {
      return "Yet to bat";
    }
    const formattedScores = team.cricketScore.map((score: any) => {
      const runs = score.runs ?? 0;
      const wickets = score.wickets ?? 0;
      const overs = score.overs ? ` (${score.overs})` : "";
      return `${runs}/${wickets}${overs}`;
    });

    // Join innings with ' & '
    return formattedScores.join(" & ");
  };

  // Calculate required runs if team1 has completed their innings
  const getMatchStatusText = () => {
    const t1Innings = team1.cricketScore || [];
    const t2Innings = team2.cricketScore || [];

    const lastT1 = t1Innings[t1Innings.length - 1];
    const lastT2 = t2Innings[t2Innings.length - 1];

    // If both teams have completed 1 inning, and match has more to go
    if (
      t1Innings.length > 0 &&
      lastT1.status === "COMPLETED" &&
      t2Innings.length === 0
    ) {
      return `${team1.teamShortName} innings completed`;
    }

    // If second team is batting, and game is in progress
    if (
      t1Innings.length > 0 &&
      t2Innings.length > 0 &&
      lastT2.status === "IN_PROGRESS"
    ) {
      const target = t1Innings.reduce(
        (sum: any, score: any) => sum + (score.runs || 0),
        0
      );
      const current = t2Innings.reduce(
        (sum: any, score: any) => sum + (score.runs || 0),
        0
      );
      const runsNeeded = target - current + 1;
      const ballsBowled = parseInt(lastT2.balls || "0", 10);
      const totalBalls = 120; // For T20; adjust per format if needed
      const ballsLeft = totalBalls - ballsBowled;

      return `${team2.teamShortName} need ${runsNeeded} runs in ${ballsLeft} balls`;
    }

    // Match fully done (e.g., both innings completed or both teams all out)
    if (lastT1?.status === "COMPLETED" && lastT2?.status === "COMPLETED") {
      const t1Total = t1Innings.reduce(
        (sum: any, score: any) => sum + (score.runs || 0),
        0
      );
      const t2Total = t2Innings.reduce(
        (sum: any, score: any) => sum + (score.runs || 0),
        0
      );

      if (t1Total > t2Total) {
        return `${team1.teamShortName} won by ${t1Total - t2Total} runs`;
      } else if (t2Total > t1Total) {
        return `${team2.teamShortName} won by ${
          10 - (lastT2.wickets || 0)
        } wickets`;
      } else {
        return `Match drawn or tied`;
      }
    }

    return "Match in progress";
  };

  return (
    <Link href={`/matches/${match.matchId}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-red-100 px-4 py-2 flex justify-between items-center">
          <span className="text-sm font-medium text-red-800">
            {match.tour.name} • {match.format}
          </span>
          <span className="flex items-center">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-medium text-red-800">LIVE</span>
          </span>
        </div>

        <div className="p-4">
          {/* Teams with flags and scores */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 w-2/5">
              <img
                src={team1.teamFlagUrl}
                alt={team1.teamShortName}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/fallback-flag.png";
                }}
              />
              <span className="font-medium truncate">
                {team1.teamShortName}
              </span>
            </div>

            <div className="text-center w-1/5 font-bold text-gray-500">vs</div>

            <div className="flex items-center space-x-2 w-2/5 justify-end">
              <span className="font-medium truncate">
                {team2.teamShortName}
              </span>
              <img
                src={team2.teamFlagUrl}
                alt={team2.teamShortName}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/fallback-flag.png";
                }}
              />
            </div>
          </div>

          {/* Scores */}
          <div className="mb-3 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {team1.teamShortName}
              </span>
              <span className="font-semibold">{formatScore(team1)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {team2.teamShortName}
              </span>
              <span className="font-semibold">{formatScore(team2)}</span>
            </div>
          </div>

          {/* Match status */}
          <div className="text-xs text-gray-600 italic mb-2">
            {getMatchStatusText()}
          </div>

          {/* Venue */}
          <div className="text-xs text-gray-500 flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {match.venue}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LiveMatchCard;
