import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/Catagory/Catagory";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                    path: '/',
                    element: <Navigate to="/catagory/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "catagory",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)
            }
           
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;