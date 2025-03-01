import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ErrorPage from './Pages/Error/ErrorPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
