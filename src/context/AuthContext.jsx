import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Rehydrate on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoadingAuth(false);
  }, []);

  // Tough Challenge #2: sync across tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "user") {
        // If user was removed/changed in another tab, reflect it here
        const newVal = e.newValue;
        if (!newVal) setUser(null);
        else setUser(JSON.parse(newVal));
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = (name, role) => {
    const userData = { name, role };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
