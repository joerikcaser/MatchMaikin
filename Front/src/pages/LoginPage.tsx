import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { MdSportsEsports, MdVisibility, MdVisibilityOff } from "react-icons/md";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [authMode, setAuthMode] = useState<"Sign Up" | "Log In">("Sign Up");
  const { login } = useAuth();
  const navigate = useNavigate();
  
  // TODO implementar el registro de un usuario
  const handleRegister = () => {
  if (!username.trim()) return;

  // Simulamos registro → iniciamos sesión
  login(username);

  if (authMode === "Sign Up") {
    navigate("/games");
  } else {
    navigate("/");
  }
};

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[theme('colors.background-light')] dark:bg-[theme('colors.background-dark')] font-display p-4">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-slate-900 shadow-md p-6">
        <div className="flex justify-center pb-6">
          <MdSportsEsports className="text-primary dark:text-white text-5xl" />
        </div>
        <h1 className="text-center text-3xl font-bold text-slate-900 dark:text-white pb-2">
          Find Your Squad
        </h1>
        <p className="text-center text-base text-slate-500 dark:text-slate-400 pb-6">
          Conéctate, compite y conquista.
        </p>

        <div className="flex bg-slate-200 dark:bg-slate-800 rounded-xl p-1 mb-6">
          {["Sign Up", "Log In"].map((mode) => (
            <button
              key={mode}
              onClick={() => setAuthMode(mode as "Sign Up" | "Log In")}
              className={`flex-1 text-sm font-semibold rounded-lg transition-all px-2 py-2 ${
                authMode === mode
                  ? "bg-white dark:bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-300"
              }`}
            >
              {mode === "Sign Up" ? "Crear Cuenta" : "Iniciar Sesión"}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {authMode === "Sign Up" && (
            <label className="flex flex-col w-full">
              <span className="text-sm font-medium text-slate-900 dark:text-white pb-1">
                Nombre de usuario
              </span>
              <input
                type="text"
                placeholder="Elige un nombre de usuario único"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                className="rounded-lg h-12 px-4 text-base bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </label>
          )}

          <label className="flex flex-col w-full">
            <span className="text-sm font-medium text-slate-900 dark:text-white pb-1">
              {authMode === "Sign Up" ? "Correo electrónico" : "Usuario o Email"}
            </span>
            <input
              type={authMode === "Sign Up" ? "email" : "text"}
              placeholder={authMode === "Sign Up" ? "Introduce tu correo" : "Introduce tu usuario o email"}
              className="rounded-lg h-12 px-4 text-base bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </label>

          <label className="flex flex-col w-full">
            <span className="text-sm font-medium text-slate-900 dark:text-white pb-1">
              Contraseña
            </span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Introduce tu contraseña"
                className="rounded-lg h-12 px-4 pr-12 text-base bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 px-4 top-0 h-full flex items-center text-slate-500 dark:text-slate-400"
              >
                {showPassword ? <MdVisibility className="text-xl" /> : <MdVisibilityOff className="text-xl" />}
              </button>
            </div>
          </label>
        </div>

        <div className="pt-6">
          <button 
              className="w-full h-12 bg-primary text-white rounded-xl font-semibold shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              onClick={handleRegister}
              >
            {authMode === "Sign Up" ? "Crear Cuenta y Continuar" : "Iniciar Sesión"}

          </button>
        </div>

        {authMode === "Sign Up" && (
          <>
            <div className="flex items-center gap-2 my-4">
              <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
              <span className="text-sm text-slate-500 dark:text-slate-400">O continuar con</span>
              <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
            </div>

            <button className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google logo"
                className="h-6 w-6"
              />
              Continuar con Google
            </button>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
              Al crear una cuenta, aceptas nuestros{" "}
              <a className="text-primary font-medium hover:underline" href="#">
                Términos de Servicio
              </a>{" "}
              y{" "}
              <a className="text-primary font-medium hover:underline" href="#">
                Política de Privacidad
              </a>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
};

function registerUser(email: any, password: any) {
  throw new Error("Function not implemented.");
}

