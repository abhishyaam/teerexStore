import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { ProtectedRoute, UserLoggedIn } from './helpers/routes';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFoundPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/login'
            element={
              <UserLoggedIn>
                <LoginPage />
              </UserLoggedIn>
            }
          />

          <Route
            path='/'
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path='/cart'
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
