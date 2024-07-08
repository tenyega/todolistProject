import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import Important from './pages/Important';
import Tasks from './pages/Tasks';
import Contact from './pages/Contact';
//Creation of router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, {
    path: "/edit",
    element: <Edit/>
  },
 {
    path: "/add",
    element: <Add />
  },
  {
     path: "/important",
     element: <Important />
   },
   {
      path: "/tasks",
      element: <Tasks />
    },
    {
       path: "/contact",
       element: <Contact />
     }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* stricMode is the one which gives us all the errors in the navigator .  */}
     
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
