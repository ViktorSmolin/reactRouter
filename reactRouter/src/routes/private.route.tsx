import type { FC } from "react";
import { Navigate } from "react-router";

interface PrivateRouterProps {
  children: React.ReactNode;
}

const PrivateRouter: FC<PrivateRouterProps> = ({ children }) => {
  const isAuth = false;
  return isAuth ? children : <Navigate to="/login" />;
};
export default PrivateRouter;
