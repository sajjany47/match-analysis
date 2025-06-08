export interface SquadMember {
  name: string;
  role: string;
}

// export interface Team {
//   name: string;
//   logo: string;
//   code: string;
//   playerName?: string;
//   playerCode?: string;
//   squad?: SquadMember[];
// }

export interface ScoreCard {
  team1Score: string;
  team2Score: string;
  result: string;
}

export interface Last10MatchReport {
  team1Wins: number;
  team2Wins: number;
  draws: number;
}

export interface Weather {
  summary: string;
  temp: number;
  humidity: string;
  wind: string;
}

export interface Officials {
  referee: string;
  umpires?: string[];
  tvUmpire?: string;
  assistantReferees?: string[];
  fourthOfficial?: string;
  videoAssistantReferee?: string;
  assistantVAR?: string;
}

export interface VenueMatch {
  date: string;
  team1: string;
  team2: string;
  score: string;
  winner: string;
}

export interface VenueStats {
  encounters: number;
  team1Wins?: number;
  team2Wins?: number;
  ties?: number;
  homeTeamWins?: number;
  awayTeamWins?: number;
}

export interface Venue {
  name: string;
  city: string;
  country: string;
  capacity: number;
  established: string;
  pitchType: string;
  matchesWonBattingFirst?: number;
  matchesWonBattingSecond?: number;
  averageFirstInningsScore?: number;
  averageFirstHalfScore?: number;
  highestTeamTotal?: string;
  lowestTeamTotal?: string;
  highestTeamScore?: string;
  lowestTeamScore?: string;
  last10Matches: VenueMatch[];
  venueStats: VenueStats;
  averageScore: number;
}
export interface DateTime {
  local: string;
  utc: string;
}

export type Match = {
  matchId: number;
  matchName: string;
  matchDescription: string;
  startTime: string; // ISO date string
  status: "NOT_STARTED" | "LIVE" | "COMPLETED";
  venue: string;
  tour: Tour;
  format: string;
  sport: string;
  teams: Team[];
};
type Tour = {
  id: number;
  name: string;
};
type Team = {
  squadId: number;
  teamName: string;
  teamShortName: string;
  teamFlagUrl: string;
  isWinner: boolean | null;
  color: string;
  cricketScore: number | null;
  squadNo: number | null;
};

export const MatchList = [
  {
    _id: 1,
    seriesName: "ICC T20 World Cup",
    seriesCode: "T20WC2025",
    sport: "Cricket",
    format: "T20",
    team1: {
      name: "India",
      logo: "https://flagcdn.com/w320/in.png",
      code: "IN",
      squad: [
        { name: "Rohit Sharma", role: "Batsman" },
        { name: "Virat Kohli", role: "Batsman" },
        { name: "Shubman Gill", role: "Batsman" },
        { name: "Suryakumar Yadav", role: "Batsman" },
        { name: "Hardik Pandya", role: "All-rounder" },
        { name: "Ravindra Jadeja", role: "All-rounder" },
        { name: "Axar Patel", role: "All-rounder" },
        { name: "KL Rahul", role: "Wicketkeeper" },
        { name: "Rishabh Pant", role: "Wicketkeeper" },
        { name: "Jasprit Bumrah", role: "Bowler" },
        { name: "Mohammed Siraj", role: "Bowler" },
        { name: "Arshdeep Singh", role: "Bowler" },
        { name: "Yuzvendra Chahal", role: "Bowler" },
        { name: "Kuldeep Yadav", role: "Bowler" },
        { name: "Washington Sundar", role: "All-rounder" },
      ],
    },
    team2: {
      name: "Australia",
      logo: "https://flagcdn.com/w320/au.png",
      code: "AU",
      squad: [
        { name: "David Warner", role: "Batsman" },
        { name: "Travis Head", role: "Batsman" },
        { name: "Steve Smith", role: "All-rounder" },
        { name: "Glenn Maxwell", role: "All-rounder" },
        { name: "Marcus Stoinis", role: "All-rounder" },
        { name: "Mitchell Marsh", role: "All-rounder" },
        { name: "Matthew Wade", role: "Wicketkeeper" },
        { name: "Josh Inglis", role: "Wicketkeeper" },
        { name: "Pat Cummins", role: "Bowler" },
        { name: "Mitchell Starc", role: "Bowler" },
        { name: "Josh Hazlewood", role: "Bowler" },
        { name: "Adam Zampa", role: "Bowler" },
        { name: "Ashton Agar", role: "Bowler" },
        { name: "Sean Abbott", role: "Bowler" },
        { name: "Nathan Ellis", role: "Bowler" },
      ],
    },
    teamStats: {
      team1Wins: 12,
      team2Wins: 10,
      ties: 1,
    },
    dateTime: { local: "1st May, 2025 19:30", utc: "2025-05-01T14:00:00Z" },
    matchStatus: "Upcoming",
    prediction: "India has a 65% chance to win",
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
      venueStats: {
        encounters: 5,
        team1Wins: 3,
        team2Wins: 2,
      },
      averageScore: 155,
    },
  },

  {
    _id: 6,
    seriesName: "FIFA World Cup",
    seriesCode: "FIFA2025",
    sport: "Football",
    format: "90-minutes",
    team1: {
      name: "France",
      logo: "https://flagcdn.com/w320/fr.png",
      code: "FR",
      squad: [
        // Goalkeepers
        { name: "Mike Maignan", role: "Goalkeeper" },
        { name: "Brice Samba", role: "Goalkeeper" },
        { name: "Alphonse Areola", role: "Goalkeeper" },

        // Defenders
        { name: "Theo Hernandez", role: "Defender" },
        { name: "Jules Koundé", role: "Defender" },
        { name: "William Saliba", role: "Defender" },
        { name: "Ibrahima Konaté", role: "Defender" },
        { name: "Dayot Upamecano", role: "Defender" },
        { name: "Benjamin Pavard", role: "Defender" },
        { name: "Lucas Hernandez", role: "Defender" },
        { name: "Ferland Mendy", role: "Defender" },

        // Midfielders
        { name: "Aurélien Tchouaméni", role: "Midfielder" },
        { name: "Eduardo Camavinga", role: "Midfielder" },
        { name: "Adrien Rabiot", role: "Midfielder" },
        { name: "Youssouf Fofana", role: "Midfielder" },
        { name: "Antoine Griezmann", role: "Midfielder" },

        // Forwards
        { name: "Kylian Mbappé", role: "Forward" },
        { name: "Olivier Giroud", role: "Forward" },
        { name: "Randal Kolo Muani", role: "Forward" },
        { name: "Ousmane Dembélé", role: "Forward" },
        { name: "Marcus Thuram", role: "Forward" },
        { name: "Kingsley Coman", role: "Forward" },
        { name: "Bradley Barcola", role: "Forward" },
      ],
    },
    team2: {
      name: "Argentina",
      logo: "https://flagcdn.com/w320/ar.png",
      code: "AR",
      squad: [
        // Goalkeepers
        { name: "Emiliano Martínez", role: "Goalkeeper" },
        { name: "Franco Armani", role: "Goalkeeper" },
        { name: "Gerónimo Rulli", role: "Goalkeeper" },

        // Defenders
        { name: "Cristian Romero", role: "Defender" },
        { name: "Nicolás Otamendi", role: "Defender" },
        { name: "Lisandro Martínez", role: "Defender" },
        { name: "Germán Pezzella", role: "Defender" },
        { name: "Lucas Martínez Quarta", role: "Defender" },
        { name: "Nahuel Molina", role: "Defender" },
        { name: "Nicolás Tagliafico", role: "Defender" },
        { name: "Marcos Acuña", role: "Defender" },

        // Midfielders
        { name: "Rodrigo De Paul", role: "Midfielder" },
        { name: "Alexis Mac Allister", role: "Midfielder" },
        { name: "Enzo Fernández", role: "Midfielder" },
        { name: "Leandro Paredes", role: "Midfielder" },
        { name: "Giovani Lo Celso", role: "Midfielder" },
        { name: "Exequiel Palacios", role: "Midfielder" },

        // Forwards
        { name: "Lionel Messi", role: "Forward" },
        { name: "Ángel Di María", role: "Forward" },
        { name: "Julián Álvarez", role: "Forward" },
        { name: "Lautaro Martínez", role: "Forward" },
        { name: "Nicolás González", role: "Forward" },
        { name: "Ángel Correa", role: "Forward" },
      ],
    },
    teamStats: {
      team1Wins: 6,
      team2Wins: 3,
      ties: 5,
    },
    weather: {
      summary: "Rainy",
      temp: 22,
      humidity: "65%",
      wind: "23 km/h",
    },
    officials: {
      referee: "Daniele Orsato",
      assistantReferees: ["Ciro Carbone", "Alessandro Giallatini"],
      fourthOfficial: "Ismail Elfath",
      videoAssistantReferee: "Massimiliano Irrati",
      assistantVAR: "Paolo Valeri",
    },
    dateTime: { local: "6th May, 2025 20:00", utc: "2025-05-06T14:30:00Z" },
    matchStatus: "Upcoming",
    venue: {
      name: "Lusail Stadium",
      city: "Lusail",
      country: "Qatar",
      capacity: 88000,
      established: "2021",
      pitchType: "Natural Grass",
      matchesWonHomeTeam: 6,
      matchesWonAwayTeam: 4,
      averageFirstHalfScore: 1.1,
      highestTeamScore: "4-1",
      lowestTeamScore: "0-0",
      last10Matches: [
        {
          date: "2022-12-18",
          team1: "Argentina",
          team2: "France",
          score: "Argentina 3(4) - 3(2) France",
          winner: "Argentina",
        },
        {
          date: "2022-12-13",
          team1: "Argentina",
          team2: "Croatia",
          score: "Argentina 3 - 0 Croatia",
          winner: "Argentina",
        },
        {
          date: "2022-12-06",
          team1: "Portugal",
          team2: "Switzerland",
          score: "Portugal 6 - 1 Switzerland",
          winner: "Portugal",
        },
        {
          date: "2022-11-24",
          team1: "Brazil",
          team2: "Serbia",
          score: "Brazil 2 - 0 Serbia",
          winner: "Brazil",
        },
        {
          date: "2022-11-22",
          team1: "Argentina",
          team2: "Saudi Arabia",
          score: "Argentina 1 - 2 Saudi Arabia",
          winner: "Saudi Arabia",
        },
      ],
      venueStats: {
        encounters: 5,
        homeTeamWins: 3,
        awayTeamWins: 2,
      },
      averageScore: 2.8,
    },
    prediction: "France has a 75% chance to win",
  },

  {
    _id: 10,
    seriesName: "Wimbledon",
    seriesCode: "WIMBLEDON2025",
    sport: "Tennis",
    format: "5-set",
    team1: {
      name: "Spain",
      logo: "https://flagcdn.com/w320/es.png",
      code: "ES",
      playerName: "Carlos Alcaraz",
      playerCode: "CALCARAZ",
    },
    team2: {
      name: "Serbia",
      logo: "https://flagcdn.com/w320/rs.png",
      code: "RS",
      playerName: "Novak Djokovic",
      playerCode: "NDJOKO",
    },
    teamStats: {
      team1Wins: 30,
      team2Wins: 18,
      ties: 0,
    },
    prediction: "Carlos Alcaraz has a 85% chance to win",
    weather: {
      summary: "Clear skies",
      temp: 22,
      humidity: "35%",
      wind: "18 km/h",
    },
    officials: {
      chairUmpire: "Aurélie Tourte",
      lineUmpires: ["Mohamed Lahyani", "Eva Asderaki-Moore"],
      referee: "Andreas Egli",
      videoReviewOfficial: "Pascal Maria",
    },
    dateTime: { local: "10th May, 2025 14:00", utc: "2025-05-10T08:30:00Z" },
    matchStatus: "Upcoming",
    venue: {
      name: "Centre Court",
      city: "London",
      country: "United Kingdom",
      capacity: 14979,
      established: "1922",
      surfaceType: "Grass",
      matchesWonByAlcaraz: 2,
      matchesWonByDjokovic: 1,
      averageMatchDurationMinutes: 180,
      highestMatchDuration: "4h 45m",
      shortestMatchDuration: "2h 10m",
      last5Matches: [
        {
          date: "2024-07-14",
          tournament: "Wimbledon Final",
          player1: "Carlos Alcaraz",
          player2: "Novak Djokovic",
          score: "1-6, 7-6(6), 6-1, 3-6, 6-4",
          winner: "Carlos Alcaraz",
        },
        {
          date: "2023-11-19",
          tournament: "ATP Finals",
          player1: "Novak Djokovic",
          player2: "Carlos Alcaraz",
          score: "6-3, 6-2",
          winner: "Novak Djokovic",
        },
        {
          date: "2023-07-16",
          tournament: "Wimbledon Final",
          player1: "Carlos Alcaraz",
          player2: "Novak Djokovic",
          score: "1-6, 7-6(6), 6-1, 3-6, 6-4",
          winner: "Carlos Alcaraz",
        },
      ],
      venueStats: {
        matchesPlayed: 3,
        alcarazWins: 2,
        djokovicWins: 1,
      },
      averageScore: "3 sets per match",
    },
  },
];
