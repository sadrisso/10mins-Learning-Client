import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaHome } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';

const Dashboard = () => {

    const { user } = useAuth()

    return (
        <div>
            <div className="navbar px-10 fixed z-10 bg-white text-black ">
                <div className="flex-1">
                    <Link className="flex items-center justify-center" to="/">
                        <PiStudentBold className="text-3xl" />
                        <span className="font-semibold">Learning</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/"><li><a><FaHome className='text-[16px]' /></a></li></NavLink>
                        <NavLink to="/dashboard"><li><a>Home</a></li></NavLink>
                        <li className='flex'>
                            <p>{user?.displayName}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#010313] min-h-screen pt-[70px]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;