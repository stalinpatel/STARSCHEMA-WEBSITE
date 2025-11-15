import { Outlet } from "react-router-dom"; // ← Import Outlet
import UserNavbar from "../components/layout/user/UserNavbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <UserNavbar />
      <main className="grow">
        <Outlet /> 
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
