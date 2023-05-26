import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Resister/Resister";
import Chefs from "../Pages/Chefs/Chefs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ViewRecipe from "../Pages/ViewRecipe/ViewRecipe";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import About from "../Pages/AboutUs/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Chefs></Chefs>
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            },


        ]
    },
    {
        path: '/chefs/:id',
        element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://bengali-bhoj-recipe-server-sakib56.vercel.app/chefs/${params.id}`)
    },
    {
        path: '/*',
        element: <ErrorPage />
    }
])
export default router;