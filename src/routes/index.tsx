import { Navigate, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import { ModalTest } from "../pages/Modal";
export const MyRoutes = () => {
  const token = localStorage.getItem("@token");
  return (
    <>
      {token === null ? (
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modal" element={<ModalTest />} />
        </Routes>
      )}
    </>
  );
};
