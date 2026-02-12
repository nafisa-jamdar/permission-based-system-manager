import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { canAccessRole } from "../utils/roles";

export default function RoleRoute({ minRole, children }) {
  const { user, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) return <p>Loading...</p>;
  if (!user) return <Navigate to="/" replace />;

  // If user role is too low, redirect
  if (!canAccessRole(user.role, minRole)) return <Navigate to="/dashboard" replace />;

  return children;
}
