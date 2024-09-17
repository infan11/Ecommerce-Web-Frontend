import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const Dashboards = () => {
    return (
        <div className="min-h-screen">
            <DashboardNavbar></DashboardNavbar>
             <Outlet></Outlet>
        </div>
    );
};

export default Dashboards;