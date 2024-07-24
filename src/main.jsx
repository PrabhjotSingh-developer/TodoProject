import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider,createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import SideBar from './Components/SideBar/SideBar.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route     path="/" element={<><Navbar/><SideBar/></>}>

          <Route path='/' element={<></>}/>
          <Route path='today' element={<></>}/>
          <Route path='important' element={<></>}/>
          <Route path='planned' element={<></>}/>
          <Route path='assignedTome' element={<></>}/>


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>


  

  </React.StrictMode>,
)
