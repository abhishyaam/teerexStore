import { Navigate, Route } from 'react-router-dom';

export function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to='/login' />;
}

export function UserLoggedIn({ user, children }) {
  return !user ? children : <Navigate to='/' />;
}
