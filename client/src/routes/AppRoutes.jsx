import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoute from "./ProtectedRoutes";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>

      {/* Public (user) routes */}
      {UserRoutes}

      {/* Protected admin routes */}
      <Route element={<ProtectedRoute />}>
        {AdminRoutes}
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 — Page not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
