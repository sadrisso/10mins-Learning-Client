import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {


    return (
        <div className="poppins overflow-hidden">
            <div>
                <Navbar />
            </div>

            <div className="min-h-[calc(100vh-55px)] bg-[#010313]">
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