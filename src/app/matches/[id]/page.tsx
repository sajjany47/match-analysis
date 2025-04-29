"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  MessageSquare,
  BarChart2,
  Users,
  Shield,
  Trophy,
  Calendar,
  Cloud,
  Flag,
  Mic2,
  Tv2,
  Droplets,
  Wind,
} from "lucide-react";

const MatchDetails = () => {
  const {
    venue,
    last10Matches,
    team1,
    team2,
    teamStats,
    venueStats,
    prediction,
    averageScore,
    weather,
    officials,
  } = {
    venue: {
      name: "Eden Gardens",
      city: "Kolkata",
      country: "India",
      capacity: 68000,
      established: "1864",
      pitchType: "Spin-friendly",
      matchesWonBattingFirst: 32,
      matchesWonBattingSecond: 28,
      averageFirstInningsScore: 165,
      highestTeamTotal: "210/4",
      lowestTeamTotal: "85/10",
    },
    last10Matches: [
      {
        date: "2025-04-20",
        team1: "India",
        team2: "Australia",
        score: "India 170/8 - Australia 165/9",
        winner: "India",
      },
      {
        date: "2025-03-30",
        team1: "Pakistan",
        team2: "South Africa",
        score: "Pakistan 140/10 - SA 144/6",
        winner: "South Africa",
      },
      {
        date: "2025-03-15",
        team1: "England",
        team2: "New Zealand",
        score: "England 185/6 - NZ 180/7",
        winner: "England",
      },
      {
        date: "2025-03-05",
        team1: "India",
        team2: "South Africa",
        score: "India 160/5 - SA 158/8",
        winner: "India",
      },
      {
        date: "2025-02-28",
        team1: "Australia",
        team2: "Pakistan",
        score: "Australia 175/4 - Pakistan 170/9",
        winner: "Australia",
      },
    ],
    team1: {
      name: "India",
      squad: [
        { name: "Rohit Sharma", role: "Batsman" },
        { name: "Virat Kohli", role: "Batsman" },
        { name: "Jasprit Bumrah", role: "Bowler" },
        { name: "Hardik Pandya", role: "All-rounder" },
        { name: "Ravindra Jadeja", role: "All-rounder" },
        { name: "KL Rahul", role: "Wicketkeeper" },
      ],
    },
    team2: {
      name: "Australia",
      squad: [
        { name: "David Warner", role: "Batsman" },
        { name: "Pat Cummins", role: "Bowler" },
        { name: "Steve Smith", role: "All-rounder" },
        { name: "Glenn Maxwell", role: "All-rounder" },
        { name: "Mitchell Starc", role: "Bowler" },
        { name: "Josh Hazlewood", role: "Bowler" },
      ],
    },
    teamStats: {
      team1Wins: 12,
      team2Wins: 10,
      ties: 1,
    },
    venueStats: {
      encounters: 5,
      team1Wins: 3,
      team2Wins: 2,
    },
    prediction: "India has a 65% chance to win",
    averageScore: 155,
    weather: {
      summary: "Clear skies",
      temp: 32,
      humidity: "45%",
      wind: "12 km/h",
    },
    officials: {
      referee: "Ranjan Madugalle",
      umpires: ["Aleem Dar", "Marais Erasmus"],
      tvUmpire: "Richard Kettleborough",
    },
  };

  const totalMatches =
    venue.matchesWonBattingFirst + venue.matchesWonBattingSecond;

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      {/* Match Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {team1.name} <span className="text-muted-foreground">vs</span>{" "}
          {team2.name}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Venue:{" "}
          <span className="font-semibold text-foreground">
            {venue.name}, {venue.city}
          </span>
        </p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Venue Details */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Venue Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-1 border-b border-border/50">
              <span className="text-muted-foreground">Location:</span>
              <span className="font-medium">
                {venue.city}, {venue.country}
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-border/50">
              <span className="text-muted-foreground">Capacity:</span>
              <span className="font-medium">
                {venue.capacity.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-muted-foreground">Established:</span>
              <span className="font-medium">{venue.established}</span>
            </div>
          </CardContent>
        </Card>

        {/* Match Insights */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Match Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-1 border-b border-border/50">
              <span className="text-muted-foreground">Average Score:</span>
              <span className="font-medium">{averageScore}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-border/50">
              <span className="text-muted-foreground">Weather:</span>
              <span className="font-medium">
                {weather.summary} ({weather.temp}°C)
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-muted-foreground">Prediction:</span>
              <span className="font-medium text-primary">{prediction}</span>
            </div>
          </CardContent>
        </Card>

        {/* Head to Head Summary */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <BarChart2 className="w-5 h-5" />
              Head to Head
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-1 border-b border-border/50">
              <span className="text-muted-foreground">Total Matches:</span>
              <span className="font-medium">
                {teamStats.team1Wins + teamStats.team2Wins + teamStats.ties}
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-border/50">
              <span className="text-muted-foreground">{team1.name} Wins:</span>
              <span className="font-medium text-green-500">
                {teamStats.team1Wins}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-muted-foreground">{team2.name} Wins:</span>
              <span className="font-medium text-red-500">
                {teamStats.team2Wins}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Last Matches and Squads Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Last 10 matches at venue */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Matches at {venue.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {last10Matches.map((match, i) => (
                <div
                  key={i}
                  className={`border p-4 rounded-md transition-colors ${
                    match.winner === team1.name
                      ? "bg-green-50 border-green-200 hover:bg-green-100"
                      : match.winner === team2.name
                      ? "bg-red-50 border-red-200 hover:bg-red-100"
                      : "bg-muted hover:bg-muted/50 border-border"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-sm sm:text-base">
                      {new Date(match.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        match.winner === team1.name
                          ? "bg-green-100 text-green-800"
                          : match.winner === team2.name
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {match.winner}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base mb-1">{match.score}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{match.team1}</span>
                    <span>vs</span>
                    <span>{match.team2}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Squad Tabs */}
        <div>
          <Tabs defaultValue="team1" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-4 h-12">
              <TabsTrigger
                value="team1"
                className="font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Users className="w-4 h-4 mr-2" />
                {team1.name}
              </TabsTrigger>
              <TabsTrigger
                value="team2"
                className="font-semibold data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground"
              >
                <Users className="w-4 h-4 mr-2" />
                {team2.name}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="team1">
              <Card className="shadow-lg border-border">
                <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {team1.squad.map((player, i) => (
                    <div
                      key={i}
                      className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow bg-card"
                    >
                      <p className="font-semibold text-primary">
                        {player.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {player.role}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team2">
              <Card className="shadow-lg border-border">
                <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {team2.squad.map((player, i) => (
                    <div
                      key={i}
                      className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow bg-card"
                    >
                      <p className="font-semibold text-destructive">
                        {player.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {player.role}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Detailed Stats and Officials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Venue Performance */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Performance at {venue.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Total Matches Played:</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="text-right mt-1 text-sm text-muted-foreground">
                  {venueStats.encounters} matches
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">
                  {team1.name} Wins at this venue:
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (venueStats.team1Wins / venueStats.encounters) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-right mt-1 text-sm text-muted-foreground">
                  {venueStats.team1Wins} wins (
                  {Math.round(
                    (venueStats.team1Wins / venueStats.encounters) * 100
                  )}
                  %)
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">
                  {team2.name} Wins at this venue:
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (venueStats.team2Wins / venueStats.encounters) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-right mt-1 text-sm text-muted-foreground">
                  {venueStats.team2Wins} wins (
                  {Math.round(
                    (venueStats.team2Wins / venueStats.encounters) * 100
                  )}
                  %)
                </p>
              </div>

              {/* Ground Analysis Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Ground Analysis</h3>
                <p className="text-muted-foreground">
                  {venue.name} in {venue.city}, {venue.country} is known for its{" "}
                  {venue.pitchType.toLowerCase()} pitches. Teams batting first
                  have won {venue.matchesWonBattingFirst} matches (
                  {(
                    (venue.matchesWonBattingFirst / totalMatches) *
                    100
                  ).toFixed(1)}
                  %) compared to {venue.matchesWonBattingSecond} wins (
                  {(
                    (venue.matchesWonBattingSecond / totalMatches) *
                    100
                  ).toFixed(1)}
                  %) for teams batting second.
                </p>

                <p className="text-muted-foreground mt-2">
                  The average first innings score is{" "}
                  {venue.averageFirstInningsScore}, with the highest team total
                  being {venue.highestTeamTotal}
                  and the lowest being {venue.lowestTeamTotal}.
                  {venue.matchesWonBattingFirst > venue.matchesWonBattingSecond
                    ? " Historically, teams that win the toss prefer to bat first at this venue."
                    : " Despite the statistics, teams have found more success when chasing at this venue."}
                </p>

                <p className="text-muted-foreground mt-2">
                  {venue.pitchType === "Spin-friendly"
                    ? "Spinners tend to dominate on this pitch, especially in the later stages of the match."
                    : venue.pitchType === "Bouncy"
                    ? "Fast bowlers get good assistance from the surface, with consistent bounce and carry."
                    : "The pitch provides a fair balance between bat and ball throughout the match."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Match Officials */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Match Officials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4 p-3 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-2 rounded-full">
                <Flag className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Referee</h3>
                <p className="text-muted-foreground">{officials.referee}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-2 rounded-full">
                <Mic2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Umpires</h3>
                <ul className="text-muted-foreground list-disc list-inside">
                  {officials.umpires.map((umpire, i) => (
                    <li key={i}>{umpire}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-2 rounded-full">
                <Tv2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">TV Umpire</h3>
                <p className="text-muted-foreground">{officials.tvUmpire}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weather Details */}
      <Card className="mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-border">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Cloud className="w-5 h-5" />
            Weather Conditions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <Cloud className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Summary</p>
              <p className="text-lg font-semibold">{weather.summary}</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mx-auto mb-2 text-muted-foreground"
              >
                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              </svg>
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="text-lg font-semibold">{weather.temp}°C</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <Droplets className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="text-lg font-semibold">{weather.humidity}</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <Wind className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="text-lg font-semibold">{weather.wind}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchDetails;
