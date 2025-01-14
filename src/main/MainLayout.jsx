import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {


    return (
        <div className="poppins">
            <div>
                <Navbar />
            </div>

            <div className="min-h-[calc(100vh-270px)]">
                <Outlet />
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;