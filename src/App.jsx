import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
