import Navbar from "../components/Navbar";

const Tournaments = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Torneos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Torneo Valorant</h3>
            <p className="text-gray-400">Inscripciones abiertas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;