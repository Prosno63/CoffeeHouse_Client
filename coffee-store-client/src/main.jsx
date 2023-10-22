import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import Users from './components/Users.jsx';
import Home from './components/Home.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><App></App></PrivateRoute>,
    loader: ()=>fetch(' https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/coffee')
  },
  {
    path: "addCoffee",
    element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>,
  },
  {
    path: "updateCoffee/:id",
    element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
    loader: ({params})=>fetch(` https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/coffee/${params.id}`)
  },{
    path: 'signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path:'/viewCoffee/:id',
    element:<PrivateRoute><ViewCoffee></ViewCoffee></PrivateRoute>,
    loader: ({params})=>fetch(` https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path:'/users',
    element: <PrivateRoute><Users></Users></PrivateRoute>,
    loader: ()=>fetch(' https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/user')
  },{
    path: "/home",
    element: <Home></Home>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
