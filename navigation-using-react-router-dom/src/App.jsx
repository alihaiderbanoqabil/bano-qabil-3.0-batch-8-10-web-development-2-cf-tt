import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
const LazyHome = lazy(() => import('./screens/Home'));
import Contact from './screens/Contact'
const LazyContact = lazy(() => import('./screens/Contact'));
import About from './screens/About'
const LazyAbout = lazy(() => import('./screens/About'));
import PageNotFound from './screens/PageNotFound'
import Layout from './layouts'
// import Posts from './screens/Posts'
import { routes } from './routes.jsx'
import Dashboard from './screens/Dashboard.jsx'
import DashboardMessages from './screens/DashboardMessages.jsx'
import DashboardTasks from './screens/DashboardTasks.jsx'
import Todos from './screens/Todos.jsx'

const App = () => {
  // const user = {
  //   email: "ali@gmail.com"
  // };
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Dashboard />}>
            <Route
              path="messages"
              element={<DashboardMessages />}
            />
            <Route path="tasks" element={<DashboardTasks />} />
          </Route> */}
          {/* {
            routes.map(({ path, screen }, index) => {
              return <Route key={`${index}-${path}`} path={path} element={screen} />
            })
          } */}
          <Route path='/' element={<Suspense fallback={'Loading...'}>
            <LazyHome />
          </Suspense>} />
          <Route path='/contact' element={<Suspense fallback={'Loading...'}>
            <LazyContact />
          </Suspense>} />
          <Route path='/about' element={<Suspense fallback={'Loading...'}>
            <LazyAbout />
          </Suspense>} />
          {/* <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} /> */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>


  )
}

export default App


{/* <Routes> */ }
{/* {token && (
  <Navigate to="/contact" replace={true} />
)} */}
{/* <Route path='/' element={<Home />} /> */ }
// {
//   routes.map(({ path, screen }, index) => {
//     return <Route key={`${index}-${path}`} path={path} element={screen} />
//   })
// }
{/* <Route path='/' element={<Home />} />
<Route path='/contact' element={<Contact />} />
<Route path='/about' element={<About />} />
<Route path='/posts' element={<Posts />} /> */}
{/* wild card route  */ }
{/* <Route path='*' element={<PageNotFound />} />
</Routes> */}