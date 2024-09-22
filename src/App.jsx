import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"


import LandingPage from './components/home/LandingPage'
import ProductPage from './components/products/ProductPage'
import Navbar from './components/Navbar'
import Resources from './components/Resources'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import ProductDetailPage from './components/products/ProductDetailPage'
import ProductDescription from './components/products/ProductDescription'

function App() {


  return (
    <Router>
      
       <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage /> }/>
          <Route path="/products" element={<ProductPage /> }/>
          <Route path="/resources" element={<Resources /> }/>
          <Route path="/contact" element={<Contact /> }/>
          <Route path="/about-us" element={<AboutUs /> }/>
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/product/:id/:productName" element={<ProductDescription />} />
          
        </Routes>
        <Analytics />
       </Router>
       
  
  )
}

export default App
