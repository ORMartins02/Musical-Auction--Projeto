import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Login />} />
    </Routes>
  );
};
