import { Link, NavLink, useNavigate } from "react-router-dom";
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

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-[#1CAB55] font-semibold underline"
      : "hover:text-[#1CAB55] transition duration-150";

  return (
    <div className="flex flex-col md:flex-row md:justify-between px-6 md:px-10 py-3 items-center fixed z-10 bg-[#160929] text-white w-full shadow-sm">
      {/* Logo */}
      <NavLink className="flex items-center gap-2 text-lg font-semibold" to="/">
        <PiStudentBold className="text-3xl" />
        <span>Learning</span>
      </NavLink>

      {/* Navigation */}
      <div className="relative">
        {/* Mobile Hamburger */}
        <div className="block md:hidden">
          <button
            className="p-2 text-xl"
            onClick={toggleDropdown}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          {/* Mobile Dropdown */}
          <ul
            className={`absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg p-3 space-y-2 z-20 text-sm w-48 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink to="/" onClick={toggleDropdown} className={linkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                onClick={toggleDropdown}
                className={linkStyle}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleDropdown}
                className={linkStyle}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                onClick={toggleDropdown}
                className={linkStyle}
              >
                Sessions
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    onClick={toggleDropdown}
                    className={linkStyle}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleDropdown();
                      handleLogOut();
                    }}
                    className="w-full text-left bg-[#12214A] text-white px-4 py-2 rounded hover:bg-opacity-90 text-sm"
                  >
                    LogOut
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-5 items-center text-sm">
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs" className={linkStyle}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/sessions" className={linkStyle}>
              Sessions
            </NavLink>
          </li>

          {user && (
            <>
              <li>
                <NavLink to="/dashboard" className={linkStyle}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkStyle}>
                  Contact
                </NavLink>
              </li>
            </>
          )}

          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="bg-[#12214A] text-white text-sm px-3 py-1 rounded hover:bg-opacity-90"
              >
                LogOut
              </button>
              <Link to="/dashboard/profile" className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300 cursor-pointer"
                />
                <ul className="absolute hidden group-hover:block right-0 bg-white shadow-lg rounded-lg mt-2 text-xs w-48 p-2 z-20">
                  <li className="px-2 py-1 text-gray-600">{user?.email}</li>
                </ul>
              </Link>
            </>
          ) : (
            <li>
              <NavLink to="/login">
                <button className="btn btn-sm bg-[#1CAB55] text-white px-4 py-1 rounded text-sm">
                  LogIn
                </button>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
