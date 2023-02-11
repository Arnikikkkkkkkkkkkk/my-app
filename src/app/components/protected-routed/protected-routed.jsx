import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hook/useAuth';

const ProtectedRouted = ({redirectPath}) => {
  const { auth } = useAuth();

  if(!auth) {
    return <Navigate to={redirectPath} replace/>
  }

  return <Outlet />;
}

export default ProtectedRouted;
