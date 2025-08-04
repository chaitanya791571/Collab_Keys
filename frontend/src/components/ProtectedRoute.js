import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, forAdmin, forEvents }) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  if (!user) {
    alert('Please log in to access this page.');
    return <Navigate to="/login" />;
  }
  // Check if the user is approved for the events page
  if (forEvents && user.approved!==true) {
    alert('Your account is not approved to access this page.');
    return <Navigate to="/" />;
  }
  // Check if the user is an admin for the admin dashboard page
  if (forAdmin && !user.isAdmin) {
    alert('You do not have the necessary permissions to access this page.');
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
