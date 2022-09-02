import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import { ModalTest } from "../pages/Modal";
export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard/:id" element={<Dashboard />} />

      <Route path="/modal" element={<ModalTest />} />

      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Login />} />
    </Routes>
  );
};
