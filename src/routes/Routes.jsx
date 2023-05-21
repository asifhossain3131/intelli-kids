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
import AllToys from "../pages/public pages/all toys/AllToys";
import SingleToyDetails from "../pages/private pages/single toy details/SingleToyDetails";
import UpdateToy from "../pages/private pages/my toys/UpdateToy";
import Blog from "../pages/public pages/blog/Blog";
import ErrorPage from "../pages/shared/error page/ErrorPage";
import AboutUs from "../pages/public pages/about us/AboutUs";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
path:'alltoys',
element:<AllToys></AllToys>
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
path:'/toy/:id',
element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
loader:({params})=>fetch(`https://intelli-kidos-server.vercel.app/toys/${params.id}`)
            },
            {
path:'/updatetoy/:id',
element:<UpdateToy></UpdateToy>,
loader:({params})=>fetch(`https://intelli-kidos-server.vercel.app/toys/${params.id}`)

            },
            {
path:'/blogs',
element:<Blog></Blog>
            },
            {
path:'/aboutus',
element:<AboutUs></AboutUs>
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