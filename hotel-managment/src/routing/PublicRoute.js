import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return !user ? children : <Navigate to="/" />;
};

export default PublicRoute;