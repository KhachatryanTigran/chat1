import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
