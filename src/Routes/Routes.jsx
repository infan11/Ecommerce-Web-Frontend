import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Varify/Login/Login";
import Register from "../Components/Varify/Register/Register";

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
              path : "/login",
              element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
]);