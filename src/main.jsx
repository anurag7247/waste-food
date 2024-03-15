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
import { ResAdminProvider } from './Components/RestaurentAdmin/ContextResAdmin/ContextResAdmin'
import RestaurentTemplate from './Components/RestaurentPage/RestaurentTemplate'
import { FormProvider } from './Components/Admin/Context/FormContext'
import RestaurentAdminLogin from './Components/RestaurentAdminLogin/RestaurentAdminLogin'
import { ResAdmProvider } from './Components/RestaurentAdminLogin/Context/ResAdmCon'
import { RestaurantsProvider } from './Components/Restaurents/RestaurentsContext/RestaurentContext'


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
      <Route path='restaurant-temp/:id' element={<RestaurentTemplate/>} />
      <Route path='-restaurantlogin' element={<RestaurentAdminLogin/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RestaurantsProvider>
    <ResAdmProvider>
    <FormProvider>
    <ResAdminProvider>
  <RouterProvider router={router} />
    </ResAdminProvider>
    </FormProvider>
    </ResAdmProvider>
    </RestaurantsProvider>
  </React.StrictMode>,
)
