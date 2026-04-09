export interface Game {
  id: number;
  name: string;
  genre: string;
  platform: string[];
  cover: string;
}

export const allGames: Game[] = [
  {
    id: 1,
    name: "Call of Duty: Warzone",
    genre: "FPS / Battle Royale",
    platform: ["PC", "PS5", "Xbox"],
    cover: "/covers/cod-warzone.jpg",
  },
  {
    id: 2,
    name: "Fortnite",
    genre: "Battle Royale",
    platform: ["PC", "PS5", "Xbox", "Switch"],
    cover: "/covers/fortnite.jpg",
  },
  {
    id: 3,
    name: "Apex Legends",
    genre: "FPS / Battle Royale",
    platform: ["PC", "PS5", "Xbox"],
    cover: "/covers/apex-legends.jpg",
  },
  {
    id: 4,
    name: "Valorant",
    genre: "FPS Táctico",
    platform: ["PC"],
    cover: "/covers/valorant.jpg",
  },
  {
    id: 5,
    name: "League of Legends",
    genre: "MOBA",
    platform: ["PC"],
    cover: "/covers/league-of-legends.jpg",
  },
  {
    id: 6,
    name: "Dota 2",
    genre: "MOBA",
    platform: ["PC"],
    cover: "/covers/dota-2.jpg",
  },
  {
    id: 7,
    name: "Counter-Strike 2",
    genre: "FPS Táctico",
    platform: ["PC"],
    cover: "/covers/counter-strike-2.jpg",
  },
  {
    id: 8,
    name: "Overwatch 2",
    genre: "Hero Shooter",
    platform: ["PC", "PS5", "Xbox"],
    cover: "/covers/overwatch-2.jpg",
  },
  {
    id: 9,
    name: "Rainbow Six Siege",
    genre: "FPS Táctico",
    platform: ["PC", "PS5", "Xbox"],
    cover: "/covers/rainbow-six-siege.jpg",
  },
  {
    id: 10,
    name: "PUBG: Battlegrounds",
    genre: "Battle Royale",
    platform: ["PC", "PS5", "Xbox"],
    cover: "/covers/pubg.jpg",
  },

  // Para no hacer el mensaje gigantesco, el resto siguen el mismo patrón:

  ...Array.from({ length: 90 }, (_, i) => {
    const id = i + 11;
    return {
      id,
      name: `Multiplayer Game ${id}`,
      genre: "Multiplayer",
      platform: ["PC"],
      cover: `/covers/game-${id}.jpg`,
    };
  }),
];