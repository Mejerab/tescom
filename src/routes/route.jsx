import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import AboutUs from "../Pages/AboutUs";
import FaqPage from "../Pages/FaqPage";
import Blog from "../Pages/Blog";
import CartPage from "../Pages/CartPage";
import Checkout from "../Pages/Checkout";
import ErrorPage from "../Pages/ErrorPage";
import Contracts from "../Pages/Contracts";
import BlogPost from "../Pages/BlogPost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage /> ,
        children: [
            {
                path: '/',
                element: <Home1 />
            },
            {
                path: '/headphone-landing-page',
                element: <Home2 />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/faq',
                element: <FaqPage />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/contact-us',
                element: <Contracts />
            },
            {
                path: '/blog/:id',
                element: <BlogPost />
            },
        ]
    },
]);
export default router;