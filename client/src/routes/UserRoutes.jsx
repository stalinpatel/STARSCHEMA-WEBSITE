import React from "react";
import { Route } from "react-router-dom";

import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Courses from "../pages/user/Courses";
import CourseDetails from "../pages/user/CourseDetails";

import UserLayout from "../layouts/UserLayout";
import Contact from "../pages/user/Contact";

const UserRoutes = () => {
  return (
    <Route path="/" element={<UserLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:id" element={<CourseDetails />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  );
};

export default UserRoutes;
