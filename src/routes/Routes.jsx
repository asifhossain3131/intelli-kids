import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/public pages/home/Home";
import Login from "../pages/public pages/user authentication/Login";
import Registration from "../pages/public pages/user authentication/Registration";
import AddToys from "../pages/private pages/add toys/AddToys";
import MyToys from "../pages/private pages/my toys/MyToys";
import PrivateRoute from "../private route/PrivateRoute";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
path:'/addtoys',
element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
path:'/mytoys',
element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            }
        ]
    }
  ])

  export default router