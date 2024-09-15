import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Footer from './components/Footer'
import Videos from './views/Videos'
import Upload from './views/Upload'
import Login from './views/Login'
import Signup from './views/Signup'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'

function App() {

  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <LoadingBar
        color='#805ad5'
        progress={progress}
        onLoaderFinished={() => setProgress(0)} height={'0.2vw'}
      />
      <Header />
      <Routes>
        <Route path='/' element={<Home setProgress={setProgress} />} />
        <Route path='/videos' element={<Videos setProgress={setProgress} />} />
        <Route path='/upload' element={<Upload setProgress={setProgress} />} />
        <Route path='/login' element={<Login setProgress={setProgress} />} />
        <Route path='/signup' element={<Signup setProgress={setProgress} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
