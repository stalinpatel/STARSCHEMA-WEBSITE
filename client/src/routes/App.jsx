import { Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home";
import Contact from "../pages/user/Contact";

const PublicRoutes = [
  <Route path="/" element={<UserLayout />}>
    <Route index element={<Home />} />
    <Route path="/contact" element={<Contact />} />
  </Route>,
];

export default PublicRoutes;
