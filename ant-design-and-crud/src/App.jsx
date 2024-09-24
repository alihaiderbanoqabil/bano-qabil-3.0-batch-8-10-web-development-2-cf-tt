import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Users from './screens/Users'
import Posts from './screens/Posts'
import Todos from './screens/Todos'
import Albums from './screens/Albums'
import Header from './components/Header'
import PageNotFound from './screens/PageNotFound'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App