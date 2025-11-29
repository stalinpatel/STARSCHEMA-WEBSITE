import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Courses from "../pages/user/Courses";
import CourseDetails from "../pages/user/CourseDetails";

import UserLayout from "../layouts/UserLayout";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;

