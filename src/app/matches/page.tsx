"use client";
import React, { useEffect, useState } from "react";
import MatchCard from "@/component/MatchCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarIcon,
  Ticket as Cricket,
  FolderRoot as Football,
  Tent as Tennis,
} from "lucide-react";
import moment from "moment";
import { motion } from "framer-motion";
import axios from "axios";
import LiveMatchCard from "@/component/LiveMatchCard";
import CompletedMatchCard from "@/component/CompletedMatchCard";

const Matches = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedSport, setSelectedSport] = useState("NOT_STARTED");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.post(
          "/api/schedule",
          {},
          { headers: { "Content-Type": "application/json" } }
        );

        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  const sports = [
    { label: "Cricket", value: "cricket" },
    { label: "Football", value: "football" },
    { label: "Tennis", value: "tennis" },
  ];

  const statuses = [
    { label: "Upcoming", value: "NOT_STARTED" },
    { label: "Live", value: "LIVE" },
    { label: "Completed", value: "COMPLETED" },
  ];

  return (
    <section id="matches" className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header with calendar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Sports Matches
            </h2>
            <p className="text-muted-foreground mt-2">
              Get the latest updates on your favorite sports
            </p>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {moment(date).format("YYYY-MM-DD")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Sport Tabs */}
        <Tabs defaultValue="cricket" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="cricket" className="flex items-center gap-2">
              <Cricket className="h-4 w-4" />
              <span className="hidden sm:inline">Cricket</span>
            </TabsTrigger>
            <TabsTrigger value="football" className="flex items-center gap-2">
              <Football className="h-4 w-4" />
              <span className="hidden sm:inline">Football</span>
            </TabsTrigger>
            <TabsTrigger value="tennis" className="flex items-center gap-2">
              <Tennis className="h-4 w-4" />
              <span className="hidden sm:inline">Tennis</span>
            </TabsTrigger>
          </TabsList>

          {/* TabsContent for each sport */}
          {sports.map((sport: any, index) => (
            <TabsContent key={index} value={sport.value}>
              <Tabs
                value={selectedSport}
                onValueChange={setSelectedSport}
                className="mt-6"
              >
                {/* Status Tabs (Upcoming, Live, Completed) */}
                <TabsList className="grid w-full grid-cols-3">
                  {statuses.map((status, ind) => (
                    <TabsTrigger key={ind} value={status.value}>
                      {status.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Matches by status */}
                {statuses.map((status, elmInd) => {
                  const filteredMatches = data.filter(
                    (match) =>
                      match.sport.toLowerCase() === sport.value.toLowerCase() &&
                      match.status === status.value
                  );

                  return (
                    <TabsContent
                      key={elmInd}
                      value={status.value}
                      className="mt-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredMatches.length > 0 ? (
                          filteredMatches.map((match) => (
                            <motion.div
                              key={match.matchId}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {selectedSport === "NOT_STARTED" ? (
                                <MatchCard match={match} />
                              ) : selectedSport === "LIVE" ? (
                                <LiveMatchCard match={match} />
                              ) : (
                                <CompletedMatchCard match={match} />
                              )}
                              {/* <MatchCard match={match} /> */}
                            </motion.div>
                          ))
                        ) : (
                          <div className="text-center text-muted-foreground w-full col-span-full">
                            No {status.label} matches to display
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Matches;
