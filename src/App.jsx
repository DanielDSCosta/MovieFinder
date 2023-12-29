import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
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
