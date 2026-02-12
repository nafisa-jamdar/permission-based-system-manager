import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";
import AdminResource from "./pages/AdminResource";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin only route + useParams */}
        <Route
          path="/admin/resource/:id"
          element={
            <RoleRoute minRole="Admin">
              <AdminResource />
            </RoleRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
