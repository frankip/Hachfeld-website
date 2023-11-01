import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import ProductPage from './components/ProductPage'
import Navbar from './components/Navbar'
import Resources from './components/Resources'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import ProductDetailPage from './components/ProductDetailPage'

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
          
        </Routes>
       
       </Router>
       
  
  )
}

export default App
