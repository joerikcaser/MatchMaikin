import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Matchmaking
        </h1>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/tournaments" className="text-gray-300 hover:text-blue-500 transition">
            Torneos
          </Link>
          <Link to="/players" className="text-gray-300 hover:text-blue-500 transition">
            Buscar Jugadores
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;