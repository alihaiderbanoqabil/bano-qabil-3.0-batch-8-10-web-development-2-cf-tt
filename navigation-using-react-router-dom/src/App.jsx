import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Contact from './screens/Contact'
import About from './screens/About'
import PageNotFound from './screens/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      {/* wild card route  */}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App