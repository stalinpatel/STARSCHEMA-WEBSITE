import { Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLeads from "../pages/admin/AdminLeads";

const AdminRoutes = [
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<AdminDashboard />} />
    <Route path="leads" element={<AdminLeads />} />
  </Route>,
];

export default AdminRoutes;
