import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
]);