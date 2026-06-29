import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  return loggedIn ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
