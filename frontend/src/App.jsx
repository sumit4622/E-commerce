import Login from './Pages/Login'
import Header from './component/Header'
import Register from './Pages/Register'

import { Routes, Route } from 'react-router-dom';

// import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
    </Routes>
  )
}

export default App
