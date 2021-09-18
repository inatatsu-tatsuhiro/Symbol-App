import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from './Layout'

const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout title="HOME" page={<Home />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
