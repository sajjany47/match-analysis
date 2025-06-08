/* eslint-disable @next/next/no-img-element */
"use client";

import { Match } from "@/lib/CricketData";
import CountdownTimer from "./CountDownTimer";
import moment from "moment";

const UpcomingMatchCard = ({ match }: { match: Match }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-white">
            {match.tour.name} • {match.format}
          </span>
          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
            Upcoming Match
          </span>
        </div>
      </div>

      {/* Teams */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          {/* Team 1 */}
          <div className="flex flex-col items-center w-2/5">
            <div className="relative">
              <img
                src={match.teams[0].teamFlagUrl}
                alt={match.teams[0].teamShortName}
                className="w-14 h-14 object-contain"
              />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-800">1</span>
                </div>
              </div>
            </div>
            <span className="text-sm font-semibold mt-2 text-gray-800">
              {match.teams[0].teamShortName}
            </span>
          </div>

          {/* Match Info */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full p-2 mb-2">
              <span className="text-lg font-bold text-gray-600">VS</span>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-500">
                {moment(match.startTime).format("Do MMM")}
              </div>
              <div className="text-xs font-medium text-gray-500">
                {moment(match.startTime).format("h:mm A")}
              </div>
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center w-2/5">
            <div className="relative">
              <img
                src={match.teams[1].teamFlagUrl}
                alt={match.teams[1].teamShortName}
                className="w-14 h-14 object-contain"
              />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-800">2</span>
                </div>
              </div>
            </div>
            <span className="text-sm font-semibold mt-2 text-gray-800">
              {match.teams[1].teamShortName}
            </span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-4">
          <div className="text-xs text-center text-gray-500 mb-1">
            Match starts in:
          </div>
          <CountdownTimer
            targetDate={match.startTime}
            matchStatus={match.status}
          />
        </div>

        {/* Venue */}
        <div className="flex items-center justify-center text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
          <svg
            className="w-3 h-3 mr-1 text-gray-400"
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
          <span className="truncate">{match.venue}</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatchCard;
