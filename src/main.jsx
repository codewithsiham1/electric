import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
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
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
