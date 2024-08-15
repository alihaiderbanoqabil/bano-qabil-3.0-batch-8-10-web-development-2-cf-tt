import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Contact from './screens/Contact'
import About from './screens/About'
import PageNotFound from './screens/PageNotFound'
import Layout from './layouts'
import Posts from './screens/Posts'
import { routes } from './routes.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
       <Routes>
          {routes.map(({ path, screen }, index) => {
            return <Route key={`${index}-${path}`} path={path} element={screen} />
          })}
          {/* <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} /> */}
          {/* wild card route  */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>


  )
}

export default App