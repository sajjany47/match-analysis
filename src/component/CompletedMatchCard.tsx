/* eslint-disable @next/next/no-img-element */
import { Match } from "@/lib/CricketData";
import Link from "next/link";

const CompletedMatchCard = ({ match }: { match: Match }) => {
  const winningTeam: any = match.teams.find((team) => team.isWinner === true);
  const losingTeam: any = match.teams.find((team) => team.isWinner === false);

  // Helper function to format score
  const formatScore = (team: any) => {
    if (!team?.cricketScore || team.cricketScore.length === 0) {
      return "Yet to bat";
    }

    const formattedScores = team.cricketScore.map((score: any) => {
      const runs = score.runs ?? 0;
      const wickets = score.wickets ?? 0;
      const overs = score.overs ? ` (${score.overs})` : "";
      return `${runs}/${wickets}${overs}`;
    });

    return formattedScores.join(" & ");
  };

  const getResultText = () => {
    if (match.status === "ABANDONED") {
      return (
        <div className="font-bold text-gray-600 text-sm mb-2">
          Match abandoned
        </div>
      );
    }

    if (winningTeam && losingTeam) {
      const runDiff =
        (winningTeam.cricketScore?.[0]?.runs || 0) -
        (losingTeam.cricketScore?.[0]?.runs || 0);

      return (
        <div className="font-bold text-green-700 text-sm mb-2">
          {winningTeam.teamShortName} won by {Math.abs(runDiff)}{" "}
          {winningTeam.cricketScore?.[0]?.status === "COMPLETED"
            ? "runs"
            : "wickets"}
        </div>
      );
    }

    return null;
  };

  return (
    <Link href={`/matches/${match.matchId}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div
          className={`px-4 py-2 ${
            match.status === "ABANDONED" ? "bg-gray-100" : "bg-green-100"
          }`}
        >
          <div className="flex justify-between items-center">
            <span
              className={`text-sm font-medium ${
                match.status === "ABANDONED"
                  ? "text-gray-800"
                  : "text-green-800"
              }`}
            >
              {match.tour.name} • {match.format}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                match.status === "ABANDONED"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {match.status}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3">
            {/* Team 1 */}
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                {match.teams[0].teamFlagUrl && (
                  <img
                    src={match.teams[0].teamFlagUrl}
                    alt={match.teams[0].teamShortName}
                    className="w-5 h-5 mr-2 rounded-full object-cover"
                  />
                )}
                <span className="font-medium">
                  {match.teams[0].teamShortName}
                </span>
              </div>
              <span className="font-semibold">
                {formatScore(match.teams[0])}
              </span>
            </div>

            {/* Team 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {match.teams[1].teamFlagUrl && (
                  <img
                    src={match.teams[1].teamFlagUrl}
                    alt={match.teams[1].teamShortName}
                    className="w-5 h-5 mr-2 rounded-full object-cover"
                  />
                )}
                <span className="font-medium">
                  {match.teams[1].teamShortName}
                </span>
              </div>
              <span className="font-semibold">
                {formatScore(match.teams[1])}
              </span>
            </div>
          </div>

          {/* Result */}
          {getResultText()}

          {/* Venue */}
          <div className="text-xs text-gray-500">
            <div className="flex items-center">
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
      </div>
    </Link>
  );
};

export default CompletedMatchCard;
