/* eslint-disable @next/next/no-img-element */
import { Match } from "@/lib/CricketData";
import CountdownTimer from "./CountDownTimer";
import moment from "moment";

const UpcomingMatchCard = ({ match }: { match: Match }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gray-100 px-4 py-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            {match.tour.name} • {match.format}
          </span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Starts in:{" "}
            <CountdownTimer
              targetDate={match.startTime}
              matchStatus={match.matchStatus}
            />
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col items-center w-2/5">
            <img
              src={match.teams[0].teamFlagUrl}
              alt={match.teams[0].teamShortName}
              className="w-10 h-10 object-contain"
            />
            <span className="text-sm font-medium mt-1">
              {match.teams[0].teamShortName}
            </span>
          </div>

          <div className="text-center">
            <span className="text-xl font-bold text-gray-500">vs</span>
            <div className="text-xs text-gray-500 mt-1">
              {moment(match.startTime).format("Do MMM, h:mm A")}
            </div>
          </div>

          <div className="flex flex-col items-center w-2/5">
            <img
              src={match.teams[1].teamFlagUrl}
              alt={match.teams[1].teamShortName}
              className="w-10 h-10 object-contain"
            />
            <span className="text-sm font-medium mt-1">
              {match.teams[1].teamShortName}
            </span>
          </div>
        </div>

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
  );
};

export default UpcomingMatchCard;
