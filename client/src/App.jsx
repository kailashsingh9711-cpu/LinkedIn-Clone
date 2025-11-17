import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </>
  )
}

export default App
