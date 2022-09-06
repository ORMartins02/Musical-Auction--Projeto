import { Navigate, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import { User } from "../pages/User";
export const MyRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  );
};
