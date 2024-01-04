import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import { Home, Login, Register, Reset/* , LatestReleases, Favorites */ } from './pages'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/reset' element={<Reset />} />
          <Route exact path='/home' element={<Home />} />
          {/* <Route exact path='/latest-releases' element={<LatestReleases />} />
          <Route exact path='/favorites' element={<Favorites />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
