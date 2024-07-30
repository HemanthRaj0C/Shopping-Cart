import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext';

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
