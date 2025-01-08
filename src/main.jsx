import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './Layouts/Layouts.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Heading from './Components/Heading/Heading.jsx';
import Errorpage from './Components/Errorpage/Errorpage.jsx';
import ProductCard from './Components/ProductCard/ProductCard.jsx';
import Productdetails from './Components/Productdetails/Productdetails.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<ProductCard></ProductCard>,
            loader:()=>fetch('../electric.json')
          },
          {
            path:'/category/:category',
            element:<ProductCard></ProductCard>,
            loader:()=>fetch('../electric.json')
          },
          {
            path: '/product/:id',
            element: <Productdetails></Productdetails>,
            loader: () => fetch('../electric.json')
          },
        ],
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader: () => fetch('../electric.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader: () => fetch('../electric.json')
      }
    
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
