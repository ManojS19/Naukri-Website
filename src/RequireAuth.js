import React from 'react';
import useAuth from './useAuth';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({children}) {
    const { authed } = useAuth();
    const location= useLocation();
  return authed === true ? (
    children
  ):(
    <Navigate to='/login' replace state={{path: location.pathname}}/>
  )
}

export default RequireAuth;