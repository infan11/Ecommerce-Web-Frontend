import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Varify/Login/Login";
import Register from "../Components/Varify/Register/Register";
import Mens from "../Components/Mens/Mens/Mens";
import Watch from "../Components/Watch/Watch/Watch";
import Book from "../Components/Book/Book/Book";
import Accessories from "../Components/Accessories/Accessories/Accessories";

import NewCollection from "../Components/NewCollection/NewCollection/NewCollection";
import MobilesCollection from "../Components/MobileCollection/MobileCollection/MobilesCollection";
import SpecialOffer from "../Components/SpecialOffer/SpecialOffer/SpecialOffer";
import Brand from "../Components/Brand/Brand/Brand";
import Contact from "../Components/Contact/Contact/Contact";
import MyProfile from "../Components/Avatar/MyProfile/MyProfile";
import ProfileEdit from "../Components/Avatar/ProfileEdit/ProfileEdit";
import Dashboards from "../Components/Dasboards/Dashboards/Dashboards";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
            {
                path: "/",
                element: <Home/>
            },
            {
                path : "/mens",
                element: <Mens/>
            },
            
            {
                path : "/watch",
                element: <Watch/>
            },
             
            {
                path : "/book",
                element: <Book/>
            },
            
            {
                path : "/accessories",
                element: <Accessories/>
            },
            {
                path : "/mobileCollection",
                element: <MobilesCollection/>
            },
            {
                path : "/newCollection",
                element: <NewCollection/>
            },
            
            {
                path : "/specialOffers",
                element: <SpecialOffer/>
            },
            {
                path : "/brand",
                element: <Brand/>
                
            },
            {
                path : "/contact",
                element: <Contact/>
                
            },
            // Avatar step

              {
                path : "/myProfile",
                element: <MyProfile/>
                
            },
              {
                path : "/editProfile",
                element: <ProfileEdit/>
                
            },
             
            ,
            {
              path : "/login",
              element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    // Dashboard
    {
     path : "/dashboard",
     element : <Dashboards/>
    }
]);