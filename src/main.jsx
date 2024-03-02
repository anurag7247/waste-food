import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Restaurants from './Components/Restaurents/Restaurants'
import Contact from './Components/Contact/Contact'
import Admin from './Components/Admin/Admin'
import AdminLogin from './Components/AdminLogin/AdminLogin'
import RestaurentAdmin from './Components/RestaurentAdmin/RestaurentAdmin'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>  
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"restaurant",
//         element:<Restaurants/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='restaurant' element={<Restaurants/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='admin-login' element={<AdminLogin/>} />
      <Route path='-admin' element={<Admin/>} />
      <Route path='restaurantAdmin' element={<RestaurentAdmin/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
