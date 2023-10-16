import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import ProductPage from './components/ProductPage'
import Navbar from './components/Navbar'

function App() {


  return (
    <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage /> }/>
          <Route path="/products" element={<ProductPage /> }/>
        </Routes>
       
       </Router>
  
  )
}

export default App
