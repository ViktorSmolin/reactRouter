import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import MyProfiler from "../pages/MyProfiler";
import Delivery from "../pages/Delivery";
import Orders from "../pages/Orders";
import SettingsPage from "../pages/SettingsPage";
import Login from "../pages/Login";
import NoMatchPage from "../pages/NoMatchPage";
import PrivateRouter from "./private.route";

function AppRoutes() {
  const navigationRoutes = [
    { id: 1, path: "/", component: <MainPage /> },
    { id: 2, path: "/my-profiler/:userId", component: <MyProfiler /> },
    { id: 3, path: "/delivery", component: <Delivery /> },
    { id: 4, path: "/orders", component: <Orders /> },
    {
      id: 5,
      path: "/settings-page",
      component: (
        <PrivateRouter>
          <SettingsPage />
        </PrivateRouter>
      ),
    },
    { id: 6, path: "/login", component: <Login /> },
    { id: 7, path: "/*", component: <NoMatchPage /> },
  ];
  return (
    <Routes>
      {navigationRoutes.map((item) => {
        return (
          <Route key={item.id} path={item.path} element={item.component} />
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
