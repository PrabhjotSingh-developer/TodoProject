import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Today from './Pages/Today/Today.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Important from './Pages/Important/Important.jsx'
import { Provider } from 'react-redux'
import store from './App/Store.js'
import AllTask from './Pages/AllTasks/AllTask.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Layout/>}>
          <Route path='/' element={<Today/>}/>
          <Route path='Alltasks' element={<AllTask/>}/>
          <Route path='important' element={<Important/>}/>
          <Route path='planned' element={<></>}/>
          <Route path='assignedTome' element={<></>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store = {store}>

   <RouterProvider router={router}/>
 </Provider>

  </React.StrictMode>,
)
