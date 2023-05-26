import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


// This code would protect the routes is the user is not authenticated
const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return children;
  }
};

export default ProtectedRoute;
