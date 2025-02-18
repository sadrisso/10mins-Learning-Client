import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { PiStudentBold } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
    const { logOut, user, setLoading } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "LogOut",
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            icon: "success",
                        });
                        navigate("/login");
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("Logout Error:", error);
                    });
            }
        });
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-between px-10 py-2 items-center fixed z-10 bg-[#F2F2F2] text-black w-full">
            {/* Logo */}
            <Link className="flex items-center justify-center" to="/">
                <PiStudentBold className="text-3xl" />
                <span className="font-semibold">Learning</span>
            </Link>

            {/* Navigation Links */}
            <div>
                {/* Mobile Hamburger Icon and Dropdown */}
                <div className="block md:hidden">
                    <button
                        className="mobile-menu-button p-2"
                        onClick={toggleDropdown}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>

                    {/* Dropdown Menu */}
                    <ul
                        className={`nav-links ${isOpen ? "block" : "hidden"} absolute bg-white shadow-lg rounded-lg mt-2 p-2 space-y-2 z-10`}
                    >
                        {/* Always show these routes */}
                        <li>
                            <Link to="/" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutUs" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100">
                                About Us
                            </Link>
                        </li>
                        <Link to="/contact" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100">
                            Contact
                        </Link>
                        <li>
                            <Link to="/sessions" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100">
                                Sessions
                            </Link>
                        </li>

                        {/* Show Dashboard only if user is logged in */}
                        {user && (
                            <li>
                                <Link to="/dashboard" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogOut}
                                    className="bg-[#12214A] btn btn-sm md:btn-md text-white block px-4 py-2 hover:bg-gray-100"
                                >
                                    LogOut
                                </button>
                            </li>

                        )}
                    </ul>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex gap-3 md:gap-5 items-center">
                    {/* Always show these routes */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/sessions">
                            Sessions
                        </Link>
                    </li>

                    {/* Show Dashboard only if user is logged in */}
                    {user && (
                        <li className="flex gap-5">
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/contact">Contact</Link>
                        </li>
                    )}

                    {/* Conditional rendering for login/logout */}
                    {user ? (
                        <>
                            <button
                                onClick={handleLogOut}
                                className="bg-[#12214A] btn btn-sm md:btn-md text-white"
                            >
                                LogOut
                            </button>
                            <div className="dropdown dropdown-hover">
                                <img
                                    src={user?.photoURL}
                                    alt="User Profile"
                                    className="w-[40px] h-[40px] rounded-full"
                                />
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                                >
                                    <li>
                                        <a>{user?.email}</a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-sm md:btn-md bg-[#1CAB55] text-white">
                                LogIn
                            </button>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;