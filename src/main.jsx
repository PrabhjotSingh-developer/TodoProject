import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Today from "./Pages/Today/Today.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Important from "./Pages/Important/Important.jsx";
import { Provider } from "react-redux";
import store from "./App/Store.js";
import AllTask from "./Pages/AllTasks/AllTask.jsx";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Today />} />
      <Route path="alltasks" element={<AllTask />} />
      <Route path="important" element={<Important />} />
      <Route path="planned" element={<Important />} />
      <Route path="assignedTome" element={<Important />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1500}/>
    </Provider>
  </React.StrictMode>
);
