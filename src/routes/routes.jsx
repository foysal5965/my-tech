import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from "../components/Register/Register";
import Home from "../pages/Home";
import CategoryDetails from "../components/CategoryDetailsProducts";
import ProductDetails from "../components/ProductDetails";
import PrivateRoute from "./privateRoute/PrivatetRoute";
import Login from "../components/login";
import Profile from "../components/profile";
import ProductCart from "../components/CartProduct";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/category/:category',
                element:<CategoryDetails></CategoryDetails>,
                loader:({params})=>fetch(`http://localhost:5000/featured-products-details/${params.category}`)
            },
            {
                path:'/product/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/product-cart',
                element:<PrivateRoute>
                    <ProductCart></ProductCart>
                </PrivateRoute>
            },
        ]
    }
])