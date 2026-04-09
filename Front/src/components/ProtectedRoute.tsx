import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { user } = useAuth();

  const isDev = import.meta.env.DEV;

  if (!user && !isDev) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}