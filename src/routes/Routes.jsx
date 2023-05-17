import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/public pages/home/Home";
import Login from "../pages/public pages/user authentication/Login";
import Registration from "../pages/public pages/user authentication/Registration";

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