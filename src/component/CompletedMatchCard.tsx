import { Match } from "@/lib/CricketData";
import Link from "next/link";

const CompletedMatchCard = ({ match }: { match: Match }) => {
  const winningTeam: any = match.teams.find((team) => team.isWinner);
  const losingTeam: any = match.teams.find((team) => !team.isWinner);

  return (
    <Link href={`/matches/${match.matchId}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-green-100 px-4 py-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-green-800">
              {match.tour.name} • {match.format}
            </span>
            <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
              COMPLETED
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3">
            {/* Winning Team */}
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                {winningTeam?.teamFlagUrl && (
                  <img
                    src={winningTeam.teamFlagUrl}
                    alt={winningTeam.teamShortName}
                    className="w-5 h-5 mr-2 rounded-full object-cover"
                  />
                )}
                <span className="font-medium">
                  {winningTeam?.teamShortName}
                </span>
              </div>
              <span className="font-semibold">
                {winningTeam?.cricketScore[0]?.runs}/
                {winningTeam?.cricketScore[0]?.wickets} (
                {winningTeam?.cricketScore[0]?.overs})
              </span>
            </div>

            {/* Losing Team */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {losingTeam?.teamFlagUrl && (
                  <img
                    src={losingTeam.teamFlagUrl}
                    alt={losingTeam.teamShortName}
                    className="w-5 h-5 mr-2 rounded-full object-cover"
                  />
                )}
                <span className="font-medium">{losingTeam?.teamShortName}</span>
              </div>
              <span className="font-semibold">
                {losingTeam?.cricketScore[0]?.runs}/
                {losingTeam?.cricketScore[0]?.wickets} (
                {losingTeam?.cricketScore[0]?.overs})
              </span>
            </div>
          </div>

          <div className="font-bold text-green-700 text-sm mb-2">
            {winningTeam?.teamShortName} won by{" "}
            {Math.abs(
              (winningTeam?.cricketScore[0]?.runs || 0) -
                (losingTeam?.cricketScore[0]?.runs || 0)
            )}{" "}
            {winningTeam?.cricketScore[0]?.status === "COMPLETED"
              ? "runs"
              : "wickets"}
          </div>

          {/* Toss information - assuming it's available in match.tossWinner */}
          {/* {match.tossWinner && (
          <div className="text-xs text-gray-600 mb-2">
            Toss: {match.tossWinner} won the toss and chose {match.tossDecision}
          </div>
        )} */}

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
