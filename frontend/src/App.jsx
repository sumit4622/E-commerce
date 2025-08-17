import Login from './Pages/Login'
import Header from './component/Header'
import Register from './Pages/Register'
import Landingpage from './Pages/Landingpage';

import { Routes, Route } from 'react-router-dom';

// import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
    </Routes>
  )
}

export default App
