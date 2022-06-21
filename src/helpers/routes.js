import { Navigate } from 'react-router-dom';
import { TeeRexState } from '../context';

/**
 *
 * If user has not logged in any requests private/protected routes are redirected to <LoginPage/>
 */
export function ProtectedRoute({ children }) {
  const { user } = TeeRexState();
  return user ? children : <Navigate to='/login' />;
}

/**
 *
 * If user has logged in any requests login page are redirected to <HomePage/>
 */
export function UserLoggedIn({ children }) {
  const { user } = TeeRexState();
  return !user ? children : <Navigate to='/' />;
}
