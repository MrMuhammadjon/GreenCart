import Navbar from './Components/Navbar.jsx'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home.jsx'

export default function App() {

  const isSellerPath = useLocation().pathname.includes("seller")

  return (
    <>
      {isSellerPath ? null : <Navbar />}
      <div className={`${isSellerPath ? "" : ""}`}>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </div>
    </>
  )
}
