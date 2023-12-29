import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Home, Favorites, Login, Signup, LatestReleases } from './pages/'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/LatestReleases' element={<LatestReleases />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
