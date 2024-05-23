import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../components/auth/Auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
};

export default AuthRoutes;
