import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("/register") || location.pathname.includes("/login")

    return (
        <div>
          
        {  noHeaderFooter  ||   <Navbar/>}
            <Outlet/>
            {  noHeaderFooter  ||   <Footer/>}
        </div>
    );
};

export default Main;