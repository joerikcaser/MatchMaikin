// src/pages/ProfileSetupPage.tsx
import { useState } from "react";
import { MdArrowBack, MdSearch, MdCheck } from "react-icons/md";
import { allGames } from "../data/allGames";

export default function SelectGames() {
  const [selectedGames, setSelectedGames] = useState<number[]>([]);
  const toggleGame = (id: number) => {
    setSelectedGames((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-black dark:bg-background-dark font-display text-white">
      {/* Top AppBar */}
      <div className="flex items-center bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button>
          <MdArrowBack className="text-white text-2xl" />
        </button>
        <h1 className="text-white text-lg font-bold text-center flex-1">Configura tu perfil</h1>
        <div className="w-10" /> 
      </div>

      <div className="flex items-center justify-center gap-3 pt-3 pb-2">
        <div className="flex-1 h-1 rounded-full bg-primary mx-4"></div>
        <div className="flex-1 h-1 rounded-full bg-primary/20 mx-4"></div>
      </div>
      <p className="text-center text-sm text-gray-400 font-medium mb-4">Paso 2 de 2</p>

      <main className="flex-1 flex flex-col px-4">
        <h2 className="text-white text-[28px] font-bold pb-3 pt-2">Selecciona tus juegos favoritos</h2>

        <div className="py-3">
          <div className="flex w-full h-12 rounded-lg bg-background-dark/50">
            <div className="flex items-center justify-center pl-4 text-gray-400">
              <MdSearch className="text-lg" />
            </div>
            <input
              className="flex-1 bg-background-dark/50 text-white placeholder-gray-400 rounded-r-lg px-2 focus:outline-none"
              placeholder="Busca tus juegos"
            />
          </div>
        </div>

        <h3 className="text-white text-lg font-bold pt-4 pb-3">Juegos Populares</h3>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-3">
          {allGames.map((game) => {
            const selected = selectedGames.includes(game.id);
            return (
              <div
                key={game.id}
                className="relative group aspect-3/4 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => toggleGame(game.id)}
              >
                <img
                  src={game.cover}
                  alt={game.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                {selected && <div className="absolute inset-0 bg-black/40"></div>}
                {selected && <div className="absolute inset-0 ring-2 ring-primary ring-inset rounded-xl"></div>}
                {selected && (
                  <div className="absolute top-2 right-2 flex items-center justify-center rounded-full bg-primary text-white w-6 h-6">
                    <MdCheck className="text-base!" />
                  </div>
                )}
                <h4 className="absolute bottom-2 left-2 right-2 text-sm font-semibold text-white truncate">{game.name}</h4>
              </div>
            );
          })}
        </div>
      </main>

      <div className="sticky bottom-0 bg-background-dark/80 backdrop-blur-sm p-4 pt-3 mt-6">
        <button className="w-full h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark">
          Continuar
        </button>
      </div>
    </div>
  );
}