import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import { profiles } from "../data/perfiles";
import { allGames } from "../data/allGames";

const Players = () => {
  const [search, setSearch] = useState("");

  // Normalizamos el texto de búsqueda
  const query = search.trim().toLowerCase();

  // Filtrado eficiente sin Fuse.js
  const filteredProfiles = useMemo(() => {
    if (!query) return profiles;

    return profiles.filter((p) => {
      const nameMatch = p.name.toLowerCase().includes(query);

      const gameMatch = p.favoriteGames.some((g) =>
        g.toLowerCase().includes(query)
      );

      const genreMatch = p.genres.some((g) =>
        g.toLowerCase().includes(query)
      );

      const platformMatch = p.platform.some((pl) =>
        pl.toLowerCase().includes(query)
      );

      return nameMatch || gameMatch || genreMatch || platformMatch;
    });
  }, [query]);

  // Buscar portada del juego
  const getCover = (gameName: string) => {
    const game = allGames.find(
      (g) => g.name.toLowerCase() === gameName.toLowerCase()
    );
    return game?.cover ?? null;
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />

      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Buscar Jugadores</h2>

        <input
          type="text"
          placeholder="Buscar por nombre, juego, género o plataforma..."
          className="w-full md:w-1/2 p-3 rounded bg-gray-800 text-white mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid gap-6">
          {filteredProfiles.length === 0 ? (
            <p className="text-gray-400">No se encontraron jugadores.</p>
          ) : (
            filteredProfiles.map((player) => (
              <div
                key={player.id}
                className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex gap-4"
              >
                {/* Avatar */}
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-24 h-24 rounded object-cover"
                />

                <div className="flex-1">
                  {/* Nombre + estado */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{player.name}</h3>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        player.status === "online"
                          ? "bg-green-600"
                          : "bg-gray-600"
                      }`}
                    >
                      {player.status}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm mt-1">{player.bio}</p>

                  {/* Juegos favoritos */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {player.favoriteGames.map((game) => (
                      <div
                        key={game}
                        className="flex items-center gap-2 bg-gray-700 px-2 py-1 rounded border border-gray-600"
                      >
                        {getCover(game) ? (
                          <img
                            src={getCover(game)!}
                            alt={game}
                            className="w-8 h-8 rounded object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-xs">
                            ?
                          </div>
                        )}
                        <span className="text-sm">{game}</span>
                      </div>
                    ))}
                  </div>

                  {/* Info adicional */}
                  <div className="mt-3 text-gray-400 text-sm">
                    <strong>Géneros:</strong> {player.genres.join(", ")} •{" "}
                    <strong>Plataformas:</strong> {player.platform.join(", ")} •{" "}
                    <strong>Nivel:</strong> {player.level}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Players;