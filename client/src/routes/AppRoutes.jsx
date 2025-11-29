import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoute from "./ProtectedRoutes";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Public routes (no auth needed) */}
      {UserRoutes()}

      {/* Admin area (role-based) */}
      <Route element={<ProtectedRoute />}>{AdminRoutes}</Route>

      <Route path="*" element={<div>404 — Page not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
