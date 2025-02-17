import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/img/10minLogo.jpg"
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {

    const { logOut, user, setLoading } = useAuth()
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
                        setLoading(false)
                    })
            }
        });

    }

    return (
        <div className="flex flex-col md:flex-row md:justify-between px-10 py-2 items-center fixed z-10 bg-white text-black w-full">
            <Link className="flex items-center" to="/">
                <img src={logo} alt="" className="w-[55px] h-[55px]" />
                <span className="font-semibold">Learning</span>
            </Link>

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

                                <div className="dropdown dropdown-hover">
                                    <img src={user?.photoURL} alt="" className="w-[40px] h-[40px] rounded-full" />
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li><a>{user?.email}</a></li>
                                    </ul>
                                </div>
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