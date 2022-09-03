import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import { User } from "../pages/User";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};
