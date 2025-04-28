export interface Team {
  name: string;
  logo: string;
  code: string;
  playerName?: string; // Optional for Tennis, where individual players are mentioned
  playerCode?: string; // Optional for Tennis, where player codes are mentioned
}

export interface DateTime {
  local: string;
  utc: string;
}

export interface Match {
  _id: string | number;
  seriesName: string;
  seriesCode: string;
  sport: "Cricket" | "Football" | "Tennis"; // Limiting sport types
  format: "T20" | "ODI" | "Test" | "T10" | "90-minutes" | "5-set"; // Limiting formats
  team1: Team;
  team2: Team;
  dateTime: DateTime;
  venue: string;
}

export const MatchList = [
  // CRICKET MATCHES
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
    },
    team2: {
      name: "Australia",
      logo: "https://flagcdn.com/w320/au.png",
      code: "AU",
    },
    dateTime: { local: "1st May, 2025 19:30", utc: "2025-05-01T14:00:00Z" },
    venue: "Eden Gardens, Kolkata",
  },
  {
    _id: 2,
    seriesName: "Ashes Series",
    seriesCode: "ASHES2025",
    sport: "Cricket",
    format: "Test",
    team1: {
      name: "England",
      logo: "https://flagcdn.com/w320/gb.png",
      code: "GB",
    },
    team2: {
      name: "Australia",
      logo: "https://flagcdn.com/w320/au.png",
      code: "AU",
    },
    dateTime: { local: "2nd May, 2025 10:00", utc: "2025-05-02T04:30:00Z" },
    venue: "Lord's, London",
  },
  {
    _id: 3,
    seriesName: "Asia Cup",
    seriesCode: "ASIACUP2025",
    sport: "Cricket",
    format: "ODI",
    team1: {
      name: "Pakistan",
      logo: "https://flagcdn.com/w320/pk.png",
      code: "PK",
    },
    team2: {
      name: "Sri Lanka",
      logo: "https://flagcdn.com/w320/lk.png",
      code: "LK",
    },
    dateTime: { local: "3rd May, 2025 14:00", utc: "2025-05-03T08:30:00Z" },
    venue: "Gaddafi Stadium, Lahore",
  },
  {
    _id: 4,
    seriesName: "T10 Abu Dhabi League",
    seriesCode: "T10LEAGUE2025",
    sport: "Cricket",
    format: "T10",
    team1: {
      name: "Bangladesh",
      logo: "https://flagcdn.com/w320/bd.png",
      code: "BD",
    },
    team2: {
      name: "Afghanistan",
      logo: "https://flagcdn.com/w320/af.png",
      code: "AF",
    },
    dateTime: { local: "4th May, 2025 16:00", utc: "2025-05-04T10:30:00Z" },
    venue: "Sheikh Zayed Stadium, Abu Dhabi",
  },
  {
    _id: 5,
    seriesName: "New Zealand Tour of India",
    seriesCode: "NZIN2025",
    sport: "Cricket",
    format: "Test",
    team1: {
      name: "India",
      logo: "https://flagcdn.com/w320/in.png",
      code: "IN",
    },
    team2: {
      name: "New Zealand",
      logo: "https://flagcdn.com/w320/nz.png",
      code: "NZ",
    },
    dateTime: { local: "5th May, 2025 09:30", utc: "2025-05-05T04:00:00Z" },
    venue: "Wankhede Stadium, Mumbai",
  },

  // FOOTBALL MATCHES
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
    },
    team2: {
      name: "Argentina",
      logo: "https://flagcdn.com/w320/ar.png",
      code: "AR",
    },
    dateTime: { local: "6th May, 2025 20:00", utc: "2025-05-06T14:30:00Z" },
    venue: "Lusail Stadium, Qatar",
  },
  {
    _id: 7,
    seriesName: "UEFA Champions League Final",
    seriesCode: "UCL2025",
    sport: "Football",
    format: "90-minutes",
    team1: {
      name: "Manchester City",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
      code: "MCI",
    },
    team2: {
      name: "Real Madr_id",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madr_id_CF.svg",
      code: "RMA",
    },
    dateTime: { local: "7th May, 2025 21:00", utc: "2025-05-07T15:30:00Z" },
    venue: "Wembley Stadium, London",
  },
  {
    _id: 8,
    seriesName: "La Liga",
    seriesCode: "LALIGA2025",
    sport: "Football",
    format: "90-minutes",
    team1: {
      name: "Barcelona",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
      code: "BAR",
    },
    team2: {
      name: "Atletico Madr_id",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madr_id_2017_logo.svg",
      code: "ATM",
    },
    dateTime: { local: "8th May, 2025 19:00", utc: "2025-05-08T13:30:00Z" },
    venue: "Camp Nou, Barcelona",
  },
  {
    _id: 9,
    seriesName: "Serie A",
    seriesCode: "SERIEA2025",
    sport: "Football",
    format: "90-minutes",
    team1: {
      name: "Juventus",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Juventus_Turin.svg",
      code: "JUV",
    },
    team2: {
      name: "AC Milan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
      code: "ACM",
    },
    dateTime: { local: "9th May, 2025 18:00", utc: "2025-05-09T12:30:00Z" },
    venue: "Allianz Stadium, Turin",
  },

  // TENNIS MATCHES
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
    dateTime: { local: "10th May, 2025 14:00", utc: "2025-05-10T08:30:00Z" },
    venue: "Centre Court, London",
  },
  {
    _id: 11,
    seriesName: "Australian Open Final",
    seriesCode: "AUSOPEN2025",
    sport: "Tennis",
    format: "5-set",
    team1: {
      name: "Greece",
      logo: "https://flagcdn.com/w320/gr.png",
      code: "GR",
      playerName: "Stefanos Tsitsipas",
      playerCode: "STSITSI",
    },
    team2: {
      name: "Russia",
      logo: "https://flagcdn.com/w320/ru.png",
      code: "RU",
      playerName: "Daniil Medvedev",
      playerCode: "DMED",
    },
    dateTime: { local: "11th May, 2025 16:00", utc: "2025-05-11T10:30:00Z" },
    venue: "Rod Laver Arena, Melbourne",
  },
  {
    _id: 12,
    seriesName: "US Open",
    seriesCode: "USOPEN2025",
    sport: "Tennis",
    format: "5-set",
    team1: {
      name: "USA",
      logo: "https://flagcdn.com/w320/us.png",
      code: "US",
      playerName: "Taylor Fritz",
      playerCode: "TFRITZ",
    },
    team2: {
      name: "Germany",
      logo: "https://flagcdn.com/w320/de.png",
      code: "DE",
      playerName: "Alexander Zverev",
      playerCode: "AZVEREV",
    },
    dateTime: { local: "12th May, 2025 15:00", utc: "2025-05-12T09:30:00Z" },
    venue: "Arthur Ashe Stadium, New York",
  },

  // Keep repeating with variations to make 30 entries.
];
