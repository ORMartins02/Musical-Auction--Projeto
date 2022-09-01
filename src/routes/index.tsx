import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
