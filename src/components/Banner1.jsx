import React from 'react';
import { Link } from 'react-router-dom';

const Banner1 = () => {


    return (
        <div>
            <div className='bg-banner-3 bg-no-repeat bg-cover bg-center h-[500px] md:h-[900px] '>
                <h1 className='text-2xl md:text-7xl font-bold text-center pt-20 md:pt-32 museomoderno-title text-white'>Welcome To Learning Dashboard</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 list-none mt-10 md:mt-5'>
                    <Link to="/dashboard/viewBookedSessions"><li className='hover:cursor-pointer text-gray-500 hover:text-red-500 rounded-md'><a>View booked session</a></li></Link>
                    <Link to="/dashboard/createNote"><li className='hover:cursor-pointer text-gray-500 hover:text-red-500 rounded-md'><a>Create Note</a></li></Link>
                    <Link to="/dashboard/personalNotes"><li className='hover:cursor-pointer text-gray-500 hover:text-red-500 rounded-md'><a>Manage personal notes</a></li></Link>
                    <Link to="/dashboard/allStudyMaterialByTutor"><li className='hover:cursor-pointer text-gray-500 hover:text-red-500 rounded-md'><a>View all study materials  provided by the tutor</a></li></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner1;