import React from "react";
import { useAuthentication } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthentication();

  if (
    !user ||
    (requireAdmin && requireAdmin !== process.env.REACT_APP_HOST_USER_UD)
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
}
