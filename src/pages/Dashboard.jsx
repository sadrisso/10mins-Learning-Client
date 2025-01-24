import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaHome } from 'react-icons/fa';

const Dashboard = () => {

    const { user } = useAuth()

    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <h1 className="text-xl md:text-2xl">Welcome to Dashboard</h1>
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
            <div className='bg-[#112048]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;