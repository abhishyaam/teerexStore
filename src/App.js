import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
