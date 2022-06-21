import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { ProtectedRoute, UserLoggedIn } from './helpers/routes';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFoundPage';
function App() {
  const user = {};

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/login'
            element={
              <UserLoggedIn user={user}>
                <LoginPage />
              </UserLoggedIn>
            }
          />
          <Route
            path='/'
            element={
              <ProtectedRoute user={user}>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path='/cart'
            element={
              <ProtectedRoute user={user}>
                <CartPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
