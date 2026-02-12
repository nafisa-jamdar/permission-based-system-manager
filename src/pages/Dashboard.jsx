import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ResourceList from "../components/ResourceList";

export default function Dashboard() {
  const { user, logout, loadingAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loadingAuth && !user) navigate("/");
  }, [loadingAuth, user, navigate]);

  if (loadingAuth) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Welcome, {user.name}</p>
      <p>Role: {user.role}</p>

      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>

      <hr />

      {/* Day 1 Reusability requirement */}
      <ResourceList title="Active Resources" statusFilter="active" />
      <ResourceList title="Archived Resources" statusFilter="archived" />
    </div>
  );
}
