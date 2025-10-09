import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem('userRole'); // Get user role from local storage

  if (!userRole || (allowedRoles && !allowedRoles.includes(userRole))) {
    // User is not logged in or does not have the allowed role
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;