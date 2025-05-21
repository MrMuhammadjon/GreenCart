import Navbar from './Components/Navbar.jsx'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer.jsx'
import { AppContext, useAppContext } from './context/AppContext.jsx'
import Login from './Components/Login.jsx'
import AllProduct from './Pages/AllProduct.jsx'
import ProductCategory from './Pages/ProductCategory.jsx'
import ProductsDetalis from './Pages/ProductsDetalis.jsx'
import CartPage from './Pages/CartPage.jsx'

export default function App() {

  const isSellerPath = useLocation().pathname.includes("seller")
  const { showUserLogin } = useAppContext()

  return (
    <>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      <div className={`${isSellerPath ? "" : ""}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<AllProduct />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/product/:category' element={<ProductCategory />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/product/:category/:id' element={<ProductsDetalis />} />
          <Route path='/products/:category/:id' element={<ProductsDetalis />} />
          <Route path='/cart' element={<CartPage />} />

        </Routes>
      </div>

      {isSellerPath ? null : <Footer />}
    </>
  )
}
