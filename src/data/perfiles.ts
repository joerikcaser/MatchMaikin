export interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  avatar: string;
  favoriteGames: string[];
  genres: string[];
  platform: string[];
  level: number;
  status: "online" | "offline";
}

export const profiles: Profile[] = [
  {
    id: 1,
    name: "Alex",
    age: 24,
    location: "Madrid, España",
    bio: "Fanático de los RPG y juegos competitivos. Busco squad para raids y ranked matches.",
    avatar: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?w=1080",
    favoriteGames: ["League of Legends", "Final Fantasy XIV", "Valorant"],
    genres: ["RPG", "MOBA", "Shooter"],
    platform: ["PC", "PS5"],
    level: 87,
    status: "online",
  },
  {
    id: 2,
    name: "Lucía",
    age: 21,
    location: "Barcelona, España",
    bio: "Main support en todos los juegos. Me encanta jugar en equipo y conocer gente.",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080",
    favoriteGames: ["Overwatch 2", "Valorant", "Fortnite"],
    genres: ["Shooter", "MOBA"],
    platform: ["PC"],
    level: 54,
    status: "online",
  },
  {
    id: 3,
    name: "Diego",
    age: 29,
    location: "Sevilla, España",
    bio: "Jugador competitivo desde 2010. Me gustan los shooters tácticos.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1080",
    favoriteGames: ["CS2", "Rainbow Six Siege", "Apex Legends"],
    genres: ["Shooter", "Táctico"],
    platform: ["PC"],
    level: 92,
    status: "offline",
  },
  {
    id: 4,
    name: "Marina",
    age: 26,
    location: "Valencia, España",
    bio: "Amante de los mundos abiertos y los MMOs. Siempre dispuesta a explorar.",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080",
    favoriteGames: ["Guild Wars 2", "Final Fantasy XIV", "Black Desert Online"],
    genres: ["MMO", "Aventura"],
    platform: ["PC"],
    level: 73,
    status: "online",
  },
  {
    id: 5,
    name: "Javier",
    age: 32,
    location: "Bilbao, España",
    bio: "Jugador casual que disfruta de partidas rápidas y cooperativas.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1080",
    favoriteGames: ["Rocket League", "Fall Guys", "Fortnite"],
    genres: ["Casual", "Cooperativo"],
    platform: ["PC", "Xbox"],
    level: 41,
    status: "online",
  },
  {
    id: 6,
    name: "Sara",
    age: 19,
    location: "Málaga, España",
    bio: "Me encantan los juegos anime y los gacha. Siempre farmeando.",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080",
    favoriteGames: ["Genshin Impact", "Honkai Star Rail", "Tower of Fantasy"],
    genres: ["RPG", "Anime"],
    platform: ["PC", "Mobile"],
    level: 65,
    status: "online",
  },
];