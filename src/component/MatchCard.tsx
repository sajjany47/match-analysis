/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import CountdownTimer from "./CountDownTimer";
import { Match } from "@/lib/CricketData";
import moment from "moment";
// import CountdownTimer from "./CountdownTimer";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const getMatchTypeColor = (type: string) => {
    switch (type) {
      case "T20I":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "ODI":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Test":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Link href={`/matches/${match.matchId}`} className="block">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-border">
          <div className="bg-gradient-to-r from-green-800 to-green-600 p-3 text-white">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">
                {match.tour.name} ({match.format})
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${getMatchTypeColor(
                  match.format
                )}`}
              >
                {match.sport}
              </span>
            </div>
          </div>

          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col items-center space-y-1 w-2/5">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                  <img
                    src={match.teams[0].teamFlagUrl}
                    className="rounded-full w-12 h-12"
                    alt={match.teams[0].teamName}
                  />
                </div>
                <span className="text-sm font-medium">
                  {match.teams[0].teamName}
                </span>
              </div>

              <div className="text-center">
                <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                  vs
                </span>
              </div>

              <div className="flex flex-col items-center space-y-1 w-2/5">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                  <img
                    src={match.teams[1].teamFlagUrl}
                    className="rounded-full w-12 h-12"
                    alt={match.teams[0].teamName}
                  />
                </div>
                <span className="text-sm font-medium">
                  {match.teams[0].teamName}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2" />
                <span>{match.venue}</span>
              </div>

              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>
                  {moment
                    .utc(match.startTime)
                    .local()
                    .format("Do MMM, YYYY HH:mm A")}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <CountdownTimer
                targetDate={moment
                  .utc(match.startTime)
                  .local()
                  .format("Do MMM, YYYY HH:mm")}
              />
            </div>

            {/* <div className="mt-4 flex justify-between">
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >
                Win Prediction: {teamA.shortName} {match.predictionA}%
              </Badge>
              <Badge
                variant="outline"
                className="bg-amber-50 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
              >
                Win Prediction: {teamB.shortName} {match.predictionB}%
              </Badge>
            </div> */}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
