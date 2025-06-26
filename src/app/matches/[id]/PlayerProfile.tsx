/* eslint-disable @next/next/no-img-element */
import { Sword as Bat, Target, CheckCircle2, Star, Award, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const PlayerProfile = ({
  name,
  imageUrl,
  batStyle,
  bowlStyle,
  type,
  isPlaying = false,
  fantasyPoints = [],
  battingForm = [],
  bowlingForm = [],
  overallStats = {},
}: {
  name: string;
  imageUrl: { src: string };
  batStyle: string;
  bowlStyle: string;
  type: string;
  isPlaying?: boolean;
  fantasyPoints?: any[];
  battingForm?: any[];
  bowlingForm?: any[];
  overallStats?: any;
}) => {
  // Calculate recent form (last 5 matches)
  const recentBattingForm = battingForm.slice(0, 5);
  const recentBowlingForm = bowlingForm.slice(0, 5);
  
  // Calculate average fantasy points from recent matches
  const avgFantasyPoints = fantasyPoints.length > 0 
    ? (fantasyPoints.slice(0, 5).reduce((sum, match) => sum + parseFloat(match.total || 0), 0) / Math.min(5, fantasyPoints.length)).toFixed(1)
    : "N/A";

  // Get player role color
  const getRoleColor = (playerType: string) => {
    if (playerType.toLowerCase().includes('batsman') || playerType.toLowerCase().includes('bat')) return 'bg-blue-500';
    if (playerType.toLowerCase().includes('bowler') || playerType.toLowerCase().includes('bowl')) return 'bg-red-500';
    if (playerType.toLowerCase().includes('allrounder') || playerType.toLowerCase().includes('all')) return 'bg-purple-500';
    if (playerType.toLowerCase().includes('keeper') || playerType.toLowerCase().includes('wk')) return 'bg-green-500';
    return 'bg-gray-500';
  };

  // Calculate form indicator
  const getFormIndicator = () => {
    if (recentBattingForm.length === 0) return { color: 'bg-gray-400', text: 'No Data' };
    
    const recentRuns = recentBattingForm.slice(0, 3).map(match => {
      if (match.run === 'DNB') return 0;
      return parseInt(match.run) || 0;
    });
    
    const avgRuns = recentRuns.reduce((sum, runs) => sum + runs, 0) / recentRuns.length;
    
    if (avgRuns >= 40) return { color: 'bg-green-500', text: 'Excellent' };
    if (avgRuns >= 25) return { color: 'bg-blue-500', text: 'Good' };
    if (avgRuns >= 15) return { color: 'bg-yellow-500', text: 'Average' };
    return { color: 'bg-red-500', text: 'Poor' };
  };

  const formIndicator = getFormIndicator();

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative border-2 rounded-2xl p-5 flex flex-col gap-4 items-center bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300 group ${
        isPlaying 
          ? "border-green-300 bg-gradient-to-br from-green-50 to-green-100 shadow-lg" 
          : "border-gray-200 hover:border-blue-300"
      }`}
    >
      {/* Playing Status Badge */}
      {isPlaying && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <CheckCircle2 className="w-5 h-5 text-white" />
        </motion.div>
      )}

      {/* Player Image */}
      <div className="relative">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={imageUrl.src}
          alt={name}
          className="w-20 h-20 rounded-full shadow-xl object-cover border-4 border-white group-hover:border-blue-200 transition-colors"
        />
        
        {/* Role Badge */}
        <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${getRoleColor(type)} text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-white`}>
          {type.charAt(0)}
        </div>

        {/* Form Indicator */}
        <div className={`absolute -top-1 -left-1 w-4 h-4 ${formIndicator.color} rounded-full border-2 border-white`} title={`Form: ${formIndicator.text}`}></div>
      </div>

      {/* Player Name */}
      <div className="text-center">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
          {name}
        </h3>
        <p className="text-xs text-gray-500 font-medium">{type}</p>
      </div>

      {/* Stats Section */}
      {avgFantasyPoints !== "N/A" && (
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">Avg Points</span>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-blue-600">{avgFantasyPoints}</span>
            <span className="text-xs text-gray-500 ml-1">pts</span>
          </div>
        </div>
      )}

      {/* Playing Style */}
      <div className="w-full space-y-2">
        <div className="flex items-center text-xs text-gray-600 gap-2 px-3 py-2 bg-blue-50 rounded-full">
          <Bat className="w-3 h-3 text-blue-600" />
          <span className="font-medium">{batStyle || "N/A"}</span>
        </div>
        <div className="flex items-center text-xs text-gray-600 gap-2 px-3 py-2 bg-red-50 rounded-full">
          <Target className="w-3 h-3 text-red-600" />
          <span className="font-medium">{bowlStyle || "N/A"}</span>
        </div>
      </div>

      {/* Recent Form */}
      {recentBattingForm.length > 0 && (
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-xs font-semibold text-gray-700">Recent Form</span>
          </div>
          <div className="flex justify-center gap-1">
            {recentBattingForm.slice(0, 5).map((match, index) => {
              const runs = match.run === 'DNB' ? 0 : parseInt(match.run) || 0;
              let color = 'bg-gray-300';
              if (runs >= 50) color = 'bg-green-500';
              else if (runs >= 30) color = 'bg-blue-500';
              else if (runs >= 15) color = 'bg-yellow-500';
              else if (runs > 0) color = 'bg-orange-500';
              else color = 'bg-red-500';

              return (
                <div
                  key={index}
                  className={`w-2 h-6 ${color} rounded-sm`}
                  title={`${match.run} runs vs ${match.match.split(' vs ')[1]?.split(' ')[0] || 'Unknown'}`}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Performance Badge */}
      {isPlaying && (
        <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 text-xs font-semibold">
          <Award className="w-3 h-3 mr-1" />
          Starting XI
        </Badge>
      )}

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

export default PlayerProfile;