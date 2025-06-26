/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  MessageSquare,
  BarChart2,
  Shield,
  Trophy,
  Calendar,
  Cloud,
  Flag,
  Mic2,
  Tv2,
  Droplets,
  Wind,
  CheckCircle2,
  Clock,
  TrendingUp,
  Target,
  Activity,
  Star,
  Users,
  Award,
  Zap,
  Eye,
  ThumbsUp,
} from "lucide-react";

import { useParams } from "next/navigation";
import { MatchList } from "@/lib/CricketData";
import axios from "axios";
import PlayerProfile from "./PlayerProfile";
import { motion } from "framer-motion";

const MatchDetails = () => {
  const params = useParams();
  const data = MatchList.find((match) => match._id === Number(params.id));
  const [newData, setNewData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      if (params.id) {
        try {
          const details = await axios.post(
            "/api/match-details",
            { matchId: Number(params.id) },
            { headers: { "Content-Type": "application/json" } }
          );
          setNewData(details.data.data);
        } catch (error) {
          console.error("Error fetching match details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setNewData({});
        setLoading(false);
      }
    };
    fetchDetails();
  }, [params.id]);

  const totalMatches =
    (data?.venue?.matchesWonBattingFirst ?? 0) +
    (data?.venue?.matchesWonBattingSecond ?? 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">
            Loading Match Details...
          </h1>
          <p className="text-muted-foreground">
            Please wait while we fetch the latest match information.
          </p>
        </motion.div>
      </div>
    );
  }

  if (Object.keys(newData).length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Match Data Not Available
          </h1>
          <p className="text-muted-foreground mb-4">
            We couldn't load the match details at this time.
          </p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        {/* Enhanced Match Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-8 mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-8 mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={newData.squadList[0].flag}
                    alt={newData.squadList[0].shortName}
                    className="w-20 h-20 rounded-full shadow-lg border-4 border-white/30 mb-3"
                  />
                  <h2 className="text-2xl font-bold text-white">
                    {newData.squadList[0].shortName}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                    <span className="text-4xl font-bold text-white">VS</span>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                    {data?.venue?.name}
                  </Badge>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={newData.squadList[1].flag}
                    alt={newData.squadList[1].shortName}
                    className="w-20 h-20 rounded-full shadow-lg border-4 border-white/30 mb-3"
                  />
                  <h2 className="text-2xl font-bold text-white">
                    {newData.squadList[1].shortName}
                  </h2>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center justify-center gap-6 text-white/90"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{data?.venue?.city}, {data?.venue?.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{data?.dateTime?.local}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>{data?.seriesName}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-blue-600 text-white">Venue</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">Stadium Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Capacity:</span>
                  <span className="font-semibold">{data?.venue?.capacity?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Established:</span>
                  <span className="font-semibold">{data?.venue?.established}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pitch Type:</span>
                  <span className="font-semibold">{data?.venue?.pitchType}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-green-600 text-white">Prediction</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">AI Forecast</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Prediction:</span>
                  <span className="font-semibold text-green-600">{data?.prediction}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weather:</span>
                  <span className="font-semibold">{data?.weather?.summary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temperature:</span>
                  <span className="font-semibold">{data?.weather?.temp}°C</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-purple-600 text-white">H2H</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">Head to Head</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Matches:</span>
                  <span className="font-semibold">
                    {(data?.teamStats?.team1Wins ?? 0) + (data?.teamStats?.team2Wins ?? 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{data?.team1?.name}:</span>
                  <span className="font-semibold text-green-600">{data?.teamStats?.team1Wins}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{data?.team2?.name}:</span>
                  <span className="font-semibold text-red-600">{data?.teamStats?.team2Wins}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-orange-600 text-white">Performance</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">Venue Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Score:</span>
                  <span className="font-semibold">{data?.venue?.averageScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bat First Wins:</span>
                  <span className="font-semibold">{data?.venue?.matchesWonBattingFirst}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chase Wins:</span>
                  <span className="font-semibold">{data?.venue?.matchesWonBattingSecond}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Recent Matches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Matches at {data?.venue?.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[600px] overflow-y-auto">
                  {(data?.venue?.last10Matches ?? []).map((match, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      className={`p-4 border-b last:border-b-0 transition-all duration-300 hover:bg-gray-50 ${
                        match.winner === data?.team1?.name
                          ? "border-l-4 border-l-green-500"
                          : match.winner === data?.team2?.name
                          ? "border-l-4 border-l-red-500"
                          : "border-l-4 border-l-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="font-semibold text-sm">{match.date}</span>
                        </div>
                        <Badge
                          className={`text-xs ${
                            match.winner === data?.team1?.name
                              ? "bg-green-100 text-green-800"
                              : match.winner === data?.team2?.name
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {match.winner}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium mb-2">{match.score}</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{match.team1}</span>
                        <span className="font-bold">vs</span>
                        <span>{match.team2}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Squad Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue={newData.squadList[0].shortName} className="w-full">
              <TabsList className="w-full grid grid-cols-2 gap-2 mb-6 h-16 bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-xl shadow-lg">
                {(newData?.squadList ?? []).map((item: any) => (
                  <TabsTrigger
                    key={item.shortName}
                    value={item.shortName}
                    className="flex items-center gap-3 font-semibold data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105"
                    style={{ color: item.color }}
                  >
                    <img
                      src={item.flag}
                      alt={`${item.shortName} flag`}
                      className="w-10 h-10 object-cover rounded-full shadow-md"
                    />
                    <div className="text-left">
                      <div className="font-bold text-lg">{item.shortName}</div>
                      <div className="text-xs opacity-75">
                        {item.playingPlayer?.length || 0} players
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {(newData?.squadList ?? []).map((squad: any, index: number) => (
                <TabsContent value={squad.shortName} key={index}>
                  <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      {squad.playingPlayer.length > 0 ? (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 mb-8"
                          >
                            <div className="p-2 bg-green-600 rounded-full">
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <span className="text-lg font-bold text-green-800">Playing XI</span>
                              <div className="flex items-center gap-2 mt-1">
                                <Users className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-700">
                                  {squad.playingPlayer.length} players selected
                                </span>
                              </div>
                            </div>
                            <div className="ml-auto">
                              <Badge className="bg-green-600 text-white px-3 py-1">
                                <Star className="w-3 h-3 mr-1" />
                                Starting
                              </Badge>
                            </div>
                          </motion.div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                            {squad.playingPlayer.map((player: any, i: number) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * i, duration: 0.3 }}
                              >
                                <PlayerProfile {...player} isPlaying />
                              </motion.div>
                            ))}
                          </div>

                          {squad.benchPlayer.length > 0 && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl border border-amber-200 mb-6"
                              >
                                <div className="p-2 bg-amber-600 rounded-full">
                                  <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <span className="text-lg font-bold text-amber-800">Bench Players</span>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Users className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-medium text-amber-700">
                                      {squad.benchPlayer.length} players available
                                    </span>
                                  </div>
                                </div>
                                <div className="ml-auto">
                                  <Badge className="bg-amber-600 text-white px-3 py-1">
                                    <Eye className="w-3 h-3 mr-1" />
                                    Reserve
                                  </Badge>
                                </div>
                              </motion.div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {squad.benchPlayer.map((player: any, i: number) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                                  >
                                    <PlayerProfile {...player} />
                                  </motion.div>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {squad.benchPlayer.map((player: any, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                            >
                              <PlayerProfile {...player} />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          {/* Venue Performance */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Performance at {data?.venue?.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Matches</span>
                    <Badge className="bg-blue-100 text-blue-800">
                      {data?.venue?.venueStats?.encounters} matches
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{data?.team1?.name} Wins</span>
                    <Badge className="bg-green-100 text-green-800">
                      {Math.round(((data?.venue?.venueStats?.team1Wins ?? 0) / (data?.venue?.venueStats.encounters ?? 1)) * 100)}%
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
                      style={{
                        width: `${((data?.venue?.venueStats?.team1Wins ?? 0) / (data?.venue?.venueStats.encounters ?? 1)) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {data?.venue?.venueStats?.team1Wins} wins out of {data?.venue?.venueStats.encounters} matches
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{data?.team2?.name} Wins</span>
                    <Badge className="bg-red-100 text-red-800">
                      {Math.round(((data?.venue?.venueStats?.team2Wins ?? 0) / (data?.venue?.venueStats.encounters ?? 1)) * 100)}%
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000"
                      style={{
                        width: `${((data?.venue?.venueStats?.team2Wins ?? 0) / (data?.venue?.venueStats.encounters ?? 1)) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {data?.venue?.venueStats?.team2Wins} wins out of {data?.venue?.venueStats.encounters} matches
                  </p>
                </div>

                {/* Enhanced Ground Analysis */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-blue-600" />
                    Ground Analysis
                  </h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground leading-relaxed">
                      {data?.venue?.name} in {data?.venue?.city}, {data?.venue?.country} is known for its{" "}
                      <span className="font-semibold text-blue-600">{data?.venue?.pitchType?.toLowerCase()}</span> pitches.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 my-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-green-600">{data?.venue?.matchesWonBattingFirst}</div>
                        <div className="text-xs text-muted-foreground">Batting First Wins</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-blue-600">{data?.venue?.matchesWonBattingSecond}</div>
                        <div className="text-xs text-muted-foreground">Chasing Wins</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      The average first innings score is <span className="font-semibold text-orange-600">{data?.venue?.averageFirstInningsScore}</span>, 
                      with the highest team total being <span className="font-semibold text-green-600">{data?.venue?.highestTeamTotal}</span> and 
                      the lowest being <span className="font-semibold text-red-600">{data?.venue?.lowestTeamTotal}</span>.
                    </p>

                    <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
                      <ThumbsUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">
                        {(data?.venue?.matchesWonBattingFirst ?? 0) > (data?.venue?.matchesWonBattingSecond ?? 0)
                          ? "Teams prefer to bat first at this venue"
                          : "Chasing teams have found more success here"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Match Officials */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Match Officials
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200"
              >
                <div className="p-3 bg-blue-600 rounded-full">
                  <Flag className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-800">Match Referee</h4>
                  <p className="text-blue-700 font-medium">{data?.officials.referee}</p>
                  <p className="text-xs text-blue-600 mt-1">Overall match supervision</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200"
              >
                <div className="p-3 bg-green-600 rounded-full">
                  <Mic2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-800">Field Umpires</h4>
                  <div className="space-y-1">
                    {(data?.officials?.umpires ?? []).map((umpire, i) => (
                      <p key={i} className="text-green-700 font-medium">{umpire}</p>
                    ))}
                  </div>
                  <p className="text-xs text-green-600 mt-1">On-field decision making</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200"
              >
                <div className="p-3 bg-purple-600 rounded-full">
                  <Tv2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-purple-800">TV Umpire</h4>
                  <p className="text-purple-700 font-medium">{data?.officials?.tvUmpire}</p>
                  <p className="text-xs text-purple-600 mt-1">Video review decisions</p>
                </div>
              </motion.div>

              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Official Standards
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>ICC Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>Elite Panel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>DRS Enabled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>Neutral Officials</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Weather Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-5 h-5" />
                Weather Conditions & Match Environment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <Cloud className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <p className="text-sm text-blue-600 font-medium mb-1">Weather</p>
                  <p className="text-xl font-bold text-blue-800">{data?.weather?.summary}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center bg-orange-600 rounded-full">
                    <span className="text-white font-bold text-sm">°C</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-1">Temperature</p>
                  <p className="text-xl font-bold text-orange-800">{data?.weather?.temp}°C</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200 hover:shadow-lg transition-all duration-300"
                >
                  <Droplets className="w-8 h-8 mx-auto mb-3 text-cyan-600" />
                  <p className="text-sm text-cyan-600 font-medium mb-1">Humidity</p>
                  <p className="text-xl font-bold text-cyan-800">{data?.weather?.humidity}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <Wind className="w-8 h-8 mx-auto mb-3 text-green-600" />
                  <p className="text-sm text-green-600 font-medium mb-1">Wind Speed</p>
                  <p className="text-xl font-bold text-green-800">{data?.weather?.wind}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200"
              >
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Weather Impact Analysis
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-medium">Ideal playing conditions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-medium">No rain interruption expected</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-medium">Good visibility for players</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-medium">Favorable for batting</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MatchDetails;