import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Main = () => {
  return (
    <Routes>
        <Route path="/login" element={Login} >
        </Route>
        <Route path="/homepage" element={HomePage}>

        </Route>
      </Routes>
  )
}

export default Main