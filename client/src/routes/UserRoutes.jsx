import { Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home";

const PublicRoutes = [
  <Route path="/" element={<UserLayout />}>
    <Route index element={<Home />} />
  </Route>,
];
export default PublicRoutes;
