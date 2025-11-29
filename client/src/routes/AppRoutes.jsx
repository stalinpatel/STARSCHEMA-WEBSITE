import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./UserRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;