import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../../public/img/10minLogo.jpg"
import useAuth from '../hooks/useAuth';
import { FaHome } from 'react-icons/fa';

const Dashboard = () => {

    const { user } = useAuth()

    return (
        <div>
            <div className="navbar px-10 fixed z-10 bg-white text-black ">
                <div className="flex-1">
                    <Link className="flex items-center" to="/">
                        <img src={logo} alt="" className="w-[55px] h-[55px]" />
                        <span className="font-semibold">Learning</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a><FaHome className='text-[16px]' /></a></li></Link>
                        <Link to="/dashboard"><li><a>Home</a></li></Link>
                        <li className='flex'>
                            <p>{user?.displayName}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#010313] pt-[70px]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;