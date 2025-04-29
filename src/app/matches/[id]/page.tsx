"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

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
      capacity: 68000,
      established: "1864",
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
      // Add 8 more dummy matches if needed...
    ],
    team1: {
      name: "India",
      squad: [
        { name: "Rohit Sharma", role: "Batsman" },
        { name: "Virat Kohli", role: "Batsman" },
        { name: "Jasprit Bumrah", role: "Bowler" },
      ],
    },
    team2: {
      name: "Australia",
      squad: [
        { name: "David Warner", role: "Batsman" },
        { name: "Pat Cummins", role: "Bowler" },
        { name: "Steve Smith", role: "All-rounder" },
      ],
    },
    teamStats: {
      team1Wins: 12,
      team2Wins: 10,
      ties: 1,
    },
    venueStats: {
      encounters: 5,
    },
    prediction: "India has a 65% chance to win",
    averageScore: 155,
    weather: {
      summary: "Clear skies",
      temp: 32,
    },
    officials: {
      referee: "Ranjan Madugalle",
      umpires: ["Aleem Dar", "Marais Erasmus"],
    },
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">
        {team1.name} vs {team2.name}
      </h1>
      <p className="text-muted-foreground mb-6">
        Venue: {venue.name}, {venue.city}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Venue Details */}
        <Card>
          <CardHeader>
            <CardTitle>Venue Info</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Location:</strong> {venue.city}
            </p>
            <p>
              <strong>Capacity:</strong> {venue.capacity}
            </p>
            <p>
              <strong>Established:</strong> {venue.established}
            </p>
          </CardContent>
        </Card>

        {/* Average Score & Weather */}
        <Card>
          <CardHeader>
            <CardTitle>Match Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Average Score:</strong> {averageScore}
            </p>
            <p>
              <strong>Weather:</strong> {weather.summary} ({weather.temp}°C)
            </p>
            <p>
              <strong>Prediction:</strong> {prediction}
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Last 10 matches at venue */}
      <Card>
        <CardHeader>
          <CardTitle>Last 10 Matches at {venue.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {last10Matches.map((match, i) => (
            <div key={i} className="border p-2 rounded-md">
              <p>
                <strong>{match.date}</strong> - {match.team1} vs {match.team2}
              </p>
              <p>{match.score}</p>
              <p>Winner: {match.winner}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Squad Tabs */}
      <Tabs defaultValue="team1">
        <TabsList className="w-full grid grid-cols-2 mb-4">
          <TabsTrigger value="team1">{team1.name} Squad</TabsTrigger>
          <TabsTrigger value="team2">{team2.name} Squad</TabsTrigger>
        </TabsList>
        <TabsContent value="team1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {team1.squad.map((player, i) => (
              <Card key={i} className="p-2">
                <CardContent>
                  <p>
                    <strong>{player.name}</strong>
                  </p>
                  <p>Role: {player.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="team2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {team2.squad.map((player, i) => (
              <Card key={i} className="p-2">
                <CardContent>
                  <p>
                    <strong>{player.name}</strong>
                  </p>
                  <p>Role: {player.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      {/* Head to Head Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Head to Head Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {team1.name} Wins: {teamStats.team1Wins}
          </p>
          <p>
            {team2.name} Wins: {teamStats.team2Wins}
          </p>
          <p>Tied: {teamStats.ties}</p>
          <p>
            In {venue.name}: {venueStats.encounters} matches
          </p>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Match Officials */}
      <Card>
        <CardHeader>
          <CardTitle>Officials</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Referee:</strong> {officials.referee}
          </p>
          <p>
            <strong>Umpires:</strong> {officials.umpires.join(", ")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchDetails;
