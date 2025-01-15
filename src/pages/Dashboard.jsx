import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {

    const {user} = useAuth()

    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <h1 className="text-xl md:text-2xl">Welcome to Dashboard</h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a>Home</a></li></Link>
                        <li>
                            <details>
                                <summary>{user?.displayName}</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <Link to="/dashboard/studySession"><li><a>Create Study Session</a></li></Link>
                                    <Link to="/dashboard/viewStudySessions"><li><a>All Study Session</a></li></Link>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#112048] h-[1000px]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;