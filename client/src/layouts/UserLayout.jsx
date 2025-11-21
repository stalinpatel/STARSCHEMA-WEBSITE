import { Outlet } from "react-router-dom"; 
import UserNavbar from "../components/user/common/UserNavbar";
import UserFooter from "../components/user/common/UserFooter";

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
