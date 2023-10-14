import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRouteUser = ({ isAllowed, redirectPath = '/Login', children, }) => {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};



export default ProtectedRouteUser