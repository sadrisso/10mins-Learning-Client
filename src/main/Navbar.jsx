import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/img/10minLogo.jpg"
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {

    const { logOut, user } = useAuth()
    const navigate = useNavigate()

    console.log(user)

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "want to log out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "LogOut"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            icon: "success"
                        });
                        navigate("/login")
                    })
            }
        });

    }

    return (
        <div className="flex flex-col md:flex-row md:justify-between p-1 md:container md:mx-auto items-center">
            <div className="flex items-center">
                <img src={logo} alt="" className="w-[55px] h-[55px]" />
                <span className="font-semibold">Learning</span>
            </div>

            <div>
                <ul className="flex gap-3 md:gap-5 items-center">
                    <Link to="/"><li>Home</li></Link>
                    {
                        user && <Link to="/dashboard"><li>Dashboard</li></Link>
                    }
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="bg-[#12214A] btn btn-sm md:btn-md text-white">LogOut</button>
                                <img src={user?.photoURL} alt="" className="w-[40px] h-[40px] rounded-full" />
                            </>
                            : <Link to="/login"><button className="btn btn-sm md:btn-md bg-[#1CAB55] text-white">LogIn</button></Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

// #12121A