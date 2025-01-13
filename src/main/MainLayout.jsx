import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const MainLayout = () => {


    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="min-h-[calc(100vh-270px)]">
                <Outlet />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;