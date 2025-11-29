import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/user/common/UserNavbar";
import UserFooter from "../components/user/common/UserFooter";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <UserFooter />
    </>
  );
};

export default UserLayout;