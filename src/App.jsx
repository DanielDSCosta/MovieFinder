import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import LatestReleases from './pages/LatestReleases/LatestReleases'

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
