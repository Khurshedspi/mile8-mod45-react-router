import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Users from './components/users/Users.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>, 
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About> 
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
       // serial 2: create path and element 
      // serial 3: create laoder: 
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
     
      {
        // serial 8: dynamic path, add loader with dynamic, element 
        path: '/user/:userId',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
   
  </StrictMode>,
)
