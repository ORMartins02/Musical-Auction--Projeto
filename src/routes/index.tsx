import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Dashboard } from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
=======
import { Dashboard } from "../pages/Dashboard";
>>>>>>> 8c545b661cd4f0c5feb2176e60a5bcce35b462f0

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
