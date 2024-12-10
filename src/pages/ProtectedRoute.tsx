import { Outlet, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isAuthenticated: boolean,
    redirectPath?: string
}

const ProtectedRoute = ({isAuthenticated, redirectPath = "/login"} : ProtectedRouteProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
}

export default ProtectedRoute;