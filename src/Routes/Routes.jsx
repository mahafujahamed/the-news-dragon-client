import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../pages/Home/Catagory/Catagory";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

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
            },
            {
                path: 'terms',
                element: <Terms></Terms>
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
                loader: ({params}) => fetch(`https://the-news-dragon-server-duplicate-yours.vercel.app/catagories/${params.id}`)
            }
           
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-duplicate-yours.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;