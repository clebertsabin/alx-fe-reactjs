import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";   // ✅ import the hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ use the hook

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
