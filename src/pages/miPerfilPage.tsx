// src/pages/ProfilePage.tsx
import React, { useMemo, useState, type JSX } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import {
  MdArrowBack,
  MdMoreVert,
  MdPersonAdd,
  MdChat,
  MdQueryStats,
  MdPrivacyTip,
  MdEmojiEvents,
  MdDangerous,
  MdCheckCircle,
} from "react-icons/md";

import { profiles as allProfiles } from "../data/perfiles";
import type { Profile as ProfileType } from "../data/perfiles";
import { allGames } from "../data/allGames";

type Props = {
  profileId?: number;
};

function findCover(gameName: string): string | null {
  const g = allGames.find((x) => x.name.toLowerCase() === gameName.toLowerCase());
  return g?.cover ?? null;
}

export default function ProfilePage({ profileId }: Props): JSX.Element {
  // allow route param override if present
  const params = useParams<{ id?: string }>();
  const routeId = params.id ? Number(params.id) : undefined;
  const idToUse = typeof routeId === "number" && !Number.isNaN(routeId) ? routeId : profileId;

  const initial = useMemo<ProfileType>(() => {
    if (typeof idToUse === "number") {
      return allProfiles.find((p) => p.id === idToUse) ?? allProfiles[0];
    }
    return allProfiles[0];
  }, [idToUse]);

  const [profile] = useState<ProfileType>(initial);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <Navbar />

      <div className="flex min-h-screen w-full flex-col">
        {/* TOP BAR */}
        <header className="flex items-center justify-between p-4 pb-2 sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <button
            aria-label="Volver"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => window.history.back()}
          >
            <MdArrowBack className="text-2xl" />
          </button>

          <h2 className="text-lg font-bold tracking-tight flex-1 text-center">Perfil</h2>

          <div className="flex w-12 items-center justify-end">
            <button
              aria-label="Más opciones"
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <MdMoreVert className="text-2xl" />
            </button>
          </div>
        </header>

        {/* PROFILE HEADER */}
        <section className="p-4 max-w-3xl mx-auto w-full">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div
                  role="img"
                  aria-label={`Avatar de ${profile.name}`}
                  className="rounded-full w-32 h-32 bg-center bg-cover shadow-md"
                  style={{ backgroundImage: `url("${profile.avatar}")` }}
                />
                <span
                  className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-900"
                  aria-hidden
                />
              </div>

              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold">{profile.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {profile.status === "online" ? "En línea" : "Desconectado"}
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-md gap-3">
              <button
                className="flex min-w-[84px] flex-1 items-center justify-center rounded-lg h-10 px-4 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white text-sm font-semibold gap-2 hover:opacity-95 transition"
                aria-label="Añadir amigo"
              >
                <MdPersonAdd className="text-lg" />
                <span className="truncate">Añadir Amigo</span>
              </button>

              <button
                className="flex min-w-[84px] flex-1 items-center justify-center rounded-lg h-10 px-4 bg-cyan-600 text-white text-sm font-semibold gap-2 hover:bg-cyan-500 transition"
                aria-label="Chatear"
              >
                <MdChat className="text-lg" />
                <span className="truncate">Chatear</span>
              </button>
            </div>
          </div>
        </section>

        {/* TAGS */}
        <div className="flex gap-3 px-4 py-2 flex-wrap max-w-3xl mx-auto">
          {profile.genres.map((g) => (
            <div
              key={g}
              className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white px-4 text-sm font-medium"
            >
              {g}
            </div>
          ))}
        </div>

        {/* FAVORITE GAMES */}
        <h3 className="text-lg font-semibold px-4 pb-2 pt-6 max-w-3xl mx-auto">Juegos Favoritos</h3>
        <div className="flex overflow-x-auto pl-4 pr-1 gap-3 max-w-3xl mx-auto">
          <div className="flex items-stretch gap-3">
            {profile.favoriteGames.map((game) => (
              <div
                key={game}
                className="flex h-full flex-col gap-2 rounded-lg min-w-[10rem] bg-gray-50 dark:bg-gray-800/60 p-2"
              >
                <div
                  role="img"
                  aria-label={`Portada del juego ${game}`}
                  className="w-full aspect-[3/4] bg-center bg-cover rounded-lg shadow-sm"
                  style={{ backgroundImage: `url("${findCover(game) ?? ""}")` }}
                />
                <div>
                  <p className="text-base font-medium text-gray-900 dark:text-white">{game}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {allGames.find((g) => g.name.toLowerCase() === game.toLowerCase())?.genre ?? ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="px-4 pt-6 pb-4 flex flex-col gap-3 max-w-3xl mx-auto">
          <button className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-cyan-600 text-white text-base font-semibold gap-2 hover:bg-cyan-500 transition">
            <MdQueryStats className="text-xl" />
            <span className="truncate">Ver Estadísticas de Rendimiento</span>
          </button>

          <button className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white text-base font-semibold gap-2 hover:opacity-95 transition">
            <MdPrivacyTip className="text-xl" />
            <span className="truncate">Privacidad de Estadísticas</span>
          </button>
        </div>

        {/* MATCH HISTORY / GAME HISTORY */}
        <h3 className="text-lg font-semibold px-4 pb-2 pt-2 max-w-3xl mx-auto">Historial de Partidas</h3>
        <div className="flex flex-col gap-3 px-4 pb-8 max-w-3xl mx-auto">
          <HistoryRow
            icon={<MdEmojiEvents className="text-3xl text-green-500" />}
            title="Torneo de Verano Valorant"
            subtitle="1er Lugar - 15/07/2024"
            result="Victoria"
            resultColor="text-green-600"
          />
          <HistoryRow
            icon={<MdDangerous className="text-3xl text-red-500" />}
            title="Partida Competitiva"
            subtitle="13 - 9 - 14/07/2024"
            result="Derrota"
            resultColor="text-red-600"
          />
          <HistoryRow
            icon={<MdCheckCircle className="text-3xl text-green-500" />}
            title="Partida Competitiva"
            subtitle="13 - 5 - 14/07/2024"
            result="Victoria"
            resultColor="text-green-600"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Small components ---------- */

function HistoryRow({
  icon,
  title,
  subtitle,
  result,
  resultColor,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  result: string;
  resultColor?: string;
}): JSX.Element {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/10">
        {icon}
      </div>

      <div className="flex-1">
        <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
      </div>

      <div className={`font-bold ${resultColor ?? "text-gray-700 dark:text-gray-300"}`}>{result}</div>
    </div>
  );
}