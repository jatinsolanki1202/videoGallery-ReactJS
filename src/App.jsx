import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Footer from './components/Footer'
import Videos from './views/Videos'
import Upload from './views/Upload'
import Login from './views/Login'
import Signup from './views/Signup'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
