// src/pages/HomePage.tsx
import React, { useEffect, useRef, useState, type JSX } from "react";
import {
  MdNotifications,
  MdAdd,
  MdHome,
  MdSearch,
  MdGroups,
  MdEmojiEvents,
  MdPerson,
} from "react-icons/md";
import { useNavigate } from "react-router";

type QuickItemProps = {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function HomePage(): JSX.Element {
  const [query, setQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  // Shortcut: press "/" to focus search (like many apps)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") {
        const el = searchRef.current;
        if (el) {
          e.preventDefault();
          el.focus();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1113] text-white font-display pb-24">
      {/* TOP BAR */}
      <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-black/40 backdrop-blur-sm border-b border-white/6">
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-md"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold">MatchMaikin</h1>
            <p className="text-xs text-gray-400">Conecta. Juega. Gana.</p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <label className="relative block">
            <span className="sr-only">Buscar</span>
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <MdSearch />
            </span>
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar jugadores, juegos o torneos (pulsa / para buscar)"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              aria-label="Buscar jugadores, juegos o torneos"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Crear"
            title="Crear"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <MdAdd className="text-xl" />
          </button>

          <button
            aria-label="Notificaciones"
            title="Notificaciones"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <MdNotifications className="text-xl" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-semibold leading-none text-black bg-amber-400 rounded-full">
                {notifications}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* QUICK ACTIONS */}
      <section aria-label="Acciones rápidas" className="px-4 py-4">
        <div className="flex gap-4 overflow-x-auto pb-1">
          <QuickItem icon={<MdAdd />} label="Crear Post" />
          <QuickItem label="Buscar Jugadores" active />
          <QuickItem label="Explorar Torneos" />
          <QuickItem label="xX_ProGamer_Xx" />
          <QuickItem label="LinaPlays" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="px-4 space-y-4">
        {/* HERO / TORNEO */}
        <article className="bg-gradient-to-r from-[#0b1220] to-[#0b0f14] p-4 rounded-2xl shadow-lg border border-white/6">
          <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient">
            {/* Placeholder image area; replace with <img /> when you have assets */}
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white/90">
              Apex Legends Global Series
            </div>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-amber-300 font-semibold uppercase">Torneo Próximo</p>
              <h2 className="text-2xl font-bold mt-1">Apex Legends Global Series</h2>
              <p className="text-sm text-gray-300 mt-1">25 de Diciembre · $1,000,000 Prize Pool</p>
            </div>

            <div className="w-36 shrink-0">
              <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-lg h-10 font-bold">
                Ver Detalles
              </button>
              <button className="mt-3 w-full border border-white/8 rounded-lg h-10 text-sm text-gray-200 hover:bg-white/3 transition">
                Inscribirme
              </button>
            </div>
          </div>
        </article>

        {/* ACTIVIDAD */}
        <section aria-label="Actividad de amigos" className="bg-[#0b0f12] p-4 rounded-xl border border-white/6 flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs text-gray-400">ACTIVIDAD DE AMIGOS</p>
            <p className="font-bold mt-1">Alex logró el rango <span className="text-amber-300">'Legendario'</span></p>
            <p className="text-sm text-gray-300 mt-1">en Apex Legends</p>
          </div>

          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-sm font-semibold">
            RANK
          </div>
        </section>

        {/* FEED SIMPLIFICADO */}
        <section aria-label="Feed" className="space-y-3">
          <FeedItem
            title="Torneo local: 3v3"
            subtitle="Inscripciones abiertas · 12 equipos"
            tag="Torneo"
          />
          <FeedItem
            title="Nuevo clan: NightRaiders"
            subtitle="Buscan soporte y jungla"
            tag="Clan"
          />
        </section>
      </main>

      {/* BOTTOM NAV */}
      <nav
        aria-label="Navegación inferior"
        className="fixed bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm border border-white/6 rounded-2xl p-2 shadow-lg md:hidden"
      >
        <div className="flex justify-around items-center h-14">
          <NavItem icon={<MdHome />} label="Inicio" active onClick={()=>navigate("/miPerfil")} />
          <NavItem icon={<MdSearch />} label="Explorar" />
          <NavItem icon={<MdGroups />} label="Grupos" />
          <NavItem icon={<MdEmojiEvents />} label="Torneos" />
          <NavItem icon={<MdPerson />} label="Perfil" />
        </div>
      </nav>
    </div>
  );
}

/* ---------- COMPONENTES ---------- */

function QuickItem({ icon, label, active = false, onClick }: QuickItemProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-center w-24 shrink-0 gap-2 text-center p-2 rounded-lg transition ${
        active ? "bg-white/6 ring-1 ring-cyan-400" : "bg-white/3 hover:bg-white/6"
      }`}
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
          active ? "bg-gradient-to-br from-cyan-400 to-indigo-500 text-black" : "bg-white/5"
        }`}
      >
        {icon ?? <span className="text-sm font-medium">{label.charAt(0)}</span>}
      </div>

      <span className={`text-xs ${active ? "text-white font-semibold" : "text-gray-300"}`}>{label}</span>
    </button>
  );
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-xs transition ${active ? "text-cyan-400 font-semibold" : "text-gray-300"}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="text-2xl">{icon}</span>
      <span className="mt-0.5">{label}</span>
    </button>
  );
}

function FeedItem({ title, subtitle, tag }: { title: string; subtitle?: string; tag?: string }) {
  return (
    <article className="bg-[#071018] p-3 rounded-lg border border-white/6 flex items-start gap-3">
      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-sm font-bold">
        {tag?.charAt(0) ?? "F"}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        {subtitle && <p className="text-sm text-gray-300 mt-1">{subtitle}</p>}
      </div>
      <div className="text-xs text-gray-400">{tag}</div>
    </article>
  );
}