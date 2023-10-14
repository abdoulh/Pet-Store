import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouteAdmin = ({ isAllowed, redirectPath = '/HomePage', children, }) => {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRouteAdmin;
