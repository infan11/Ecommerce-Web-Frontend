import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("/register") || location.pathname.includes("/login")

    return (
        <div>
          
        {  noHeaderFooter  ||   <Navbar/>}
            <Outlet/>
        </div>
    );
};

export default Main;