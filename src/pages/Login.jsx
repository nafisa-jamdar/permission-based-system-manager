import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Viewer");

  const navigate = useNavigate();
  const { login, user, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) return <p>Loading...</p>;
  if (user) {
    // already logged in
    navigate("/dashboard");
  }

  const handleLogin = () => {
    if (!name.trim()) {
      alert("Please enter name");
      return;
    }

    login(name.trim(), role);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
