const stagesData = [
  // Group A
  {
    name: "Trentaduesimi",
    group: "A",
    matches: [
      { homeTeam: "Cagliari", awayTeam: "Carrarese", homeScore: 3, awayScore: 1, winner: "Cagliari" },
      { homeTeam: "Cremonese", awayTeam: "Bari", homeScore: 1, awayScore: 1, winner: "Bari" }, // Assume penalty or extra-time win
      { homeTeam: "Torino", awayTeam: "Cosenza", homeScore: 2, awayScore: 0, winner: "Torino" },
      { homeTeam: "Empoli", awayTeam: "Catanzaro", homeScore: 4, awayScore: 1, winner: "Empoli" },
      { homeTeam: "Monza", awayTeam: "SudTirol", homeScore: 3, awayScore: 2, winner: "Monza" },
      { homeTeam: "Brescia", awayTeam: "Venezia", homeScore: 1, awayScore: 1, winner: "Venezia" }, // Assume penalty or extra-time win
      { homeTeam: "Frosinone", awayTeam: "Pisa", homeScore: 0, awayScore: 3, winner: "Pisa" },
      { homeTeam: "Verona", awayTeam: "Cesena", homeScore: 1, awayScore: 2, winner: "Cesena" },
    ],
  },
  // Group B
  {
    name: "Trentaduesimi",
    group: "B",
    matches: [
      { homeTeam: "Lecce", awayTeam: "Mantova", homeScore: 2, awayScore: 1, winner: "Lecce" },
      { homeTeam: "Sassuolo", awayTeam: "Cittadella", homeScore: 2, awayScore: 1, winner: "Sassuolo" },
      { homeTeam: "Genoa", awayTeam: "Reggiana", homeScore: 1, awayScore: 0, winner: "Genoa" },
      { homeTeam: "Sampdoria", awayTeam: "Como", homeScore: 1, awayScore: 1, winner: "Sampdoria" }, // Assume penalty or extra-time win
      { homeTeam: "Napoli", awayTeam: "Modena", homeScore: 5, awayScore: 0, winner: "Napoli" },
      { homeTeam: "Palermo", awayTeam: "Parma", homeScore: 1, awayScore: 0, winner: "Palermo" },
      { homeTeam: "Salernitana", awayTeam: "Spezia", homeScore: 3, awayScore: 2, winner: "Salernitana" },
      { homeTeam: "Udinese", awayTeam: "Avellino", homeScore: 4, awayScore: 0, winner: "Udinese" },
    ],
  },
  {
    name: "Sedicesimi",
    group: "A",
    matches: [
      { homeTeam: "Cagliari", awayTeam: "Cremonese", homeScore: 1, awayScore: 0, winner: "Cagliari" },
      { homeTeam: "Torino", awayTeam: "Empoli", homeScore: 1, awayScore: 2, winner: "Empoli" },
      { homeTeam: "Monza", awayTeam: "Brescia", homeScore: 3, awayScore: 1, winner: "Monza" },
      { homeTeam: "Pisa", awayTeam: "Cesena", homeScore: 0, awayScore: 2, winner: "Cesena" },
    ],
  },
  {
    name: "Sedicesimi",
    group: "B",
    matches: [
      { homeTeam: "Lecce", awayTeam: "Sassuolo", homeScore: 0, awayScore: 2, winner: "Sassuolo" },
      { homeTeam: "Genoa", awayTeam: "Sampdoria", homeScore: 1, awayScore: 2, winner: "Sampdoria" },
      { homeTeam: "Napoli", awayTeam: "Palermo", homeScore: 0, awayScore: 1, winner: "Palermo" },
      { homeTeam: "Salernitana", awayTeam: "Udinese", homeScore: 1, awayScore: 2, winner: "Udinese" },
    ],
  },
  {
    name: "Ottavi",
    group: "A",
    matches: [
      { homeTeam: "Juve", awayTeam: "cagliari", homeScore: 0, awayScore: 0, winner: "Fiorentina", edit: "false" }, // Assume penalty or extra-time win
      { homeTeam: "Florent", awayTeam: "Empoli", homeScore: 3, awayScore: 1, winner: "Milan", edit: "false" },
      { homeTeam: "Bologn", awayTeam: "Fiorentina", homeScore: 0, awayScore: 0, winner: "Fiorentina", edit: "false" }, // Assume penalty or extra-time win
      { homeTeam: "Atalant", awayTeam: "Sampdoria", homeScore: 3, awayScore: 1, winner: "Milan", edit: "false" },
    ],
  },
  {
    name: "Ottavi",
    group: "B",
    matches: [
      { homeTeam: "Milan", awayTeam: "cagliari", homeScore: 0, awayScore: 0, winner: "Fiorentina", edit: "false" }, // Assume penalty or extra-time win
      { homeTeam: "Roma", awayTeam: "Empoli", homeScore: 3, awayScore: 1, winner: "Milan", edit: "false" },
      { homeTeam: "Inter", awayTeam: "Fiorentina", homeScore: 0, awayScore: 0, winner: "Fiorentina", edit: "false" }, // Assume penalty or extra-time win
      { homeTeam: "Lazio", awayTeam: "Sampdoria", homeScore: 3, awayScore: 1, winner: "Milan", edit: "false" },
    ],
  },
  {
    name: "Quarti",
    group: "A",
    matches: [
      { homeTeam: "Fiorentina", awayTeam: "Empoli", homeScore: 2, awayScore: 0, winner: "Fiorentina" },
      { homeTeam: "Milan", awayTeam: "Sassuolo", homeScore: 3, awayScore: 0, winner: "Milan" },
    ],
  },
  {
    name: "Quarti",
    group: "B",
    matches: [
      { homeTeam: "Bologna", awayTeam: "Monza", homeScore: 1, awayScore: 0, winner: "Bologna" },
      { homeTeam: "Lazio", awayTeam: "Napoli", homeScore: 1, awayScore: 0, winner: "Lazio" },
    ],
  },
  {
    name: "Semifinali",
    group: "A",
    matches: [{ homeTeam: "Fiorentina", awayTeam: "Bologna", homeScore: 2, awayScore: 1, winner: "Fiorentina" }],
  },
  {
    name: "Semifinali",
    group: "B",
    matches: [{ homeTeam: "Milan", awayTeam: "Lazio", homeScore: 3, awayScore: 0, winner: "Milan" }],
  },
  {
    name: "Finale",
    group: "Final",
    matches: [{ homeTeam: "Fiorentina", awayTeam: "Milan", homeScore: 1, awayScore: 2, winner: "Milan" }],
  },
];
module.exports = stagesData;
