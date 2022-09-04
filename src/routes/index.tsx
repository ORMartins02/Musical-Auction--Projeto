import { Navigate, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import { User } from "../pages/User";

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
          <Route path="*" element={<Navigate to="/dashboard/:id" />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
        </Routes>
      )}
    </>
  );
};
