import React from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import userTutor from '../hooks/userTutor';
import useStudent from '../hooks/useStudent';

const Banner1 = () => {

    const [isAdmin] = useAdmin()
    const [isTutor] = userTutor()
    const [isStudent] = useStudent()


    return (
        <div>
            <div className='bg-banner-3 bg-no-repeat bg-cover bg-center h-[500px] md:h-[900px] '>
                <h1 className='text-2xl md:text-6xl font-bold text-center pt-20 md:pt-32 museomoderno-title text-white'>
                    {
                        isAdmin ? "Welcome to Admin Dashboard" : "Welcome to learning dashboard"
                    }
                </h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 list-none mt-10 md:mt-5'>
                    <div>
                        {/* Admin Section */}
                        {isAdmin && (
                            <div className='flex flex-cols md:flex-row gap-4'>
                                <Link to="/dashboard/users">
                                    <li className='hover:cursor-pointer text-gray-500 hover:text-red-500'>
                                        All Users
                                    </li>
                                </Link>
                                <Link to="/dashboard/allStudyMaterialByTutor">
                                    <li className='hover:cursor-pointer text-gray-500 hover:text-red-500'>
                                        All Study Materials
                                    </li>
                                </Link>
                                <Link to="/dashboard/viewStudySessions" className='text-gray-500 hover:text-red-500'>
                                    <li>All Study Session</li>
                                </Link>
                            </div>
                        )}

                        {/* Tutor Section */}
                        {isTutor && !isAdmin && (
                            <div className='flex flex-cols md:flex-row gap-4'>
                                <Link to="/dashboard/studySession" className='text-gray-500 hover:text-red-500'>
                                    <li>Create Study Session</li>
                                </Link>
                                <Link to="/dashboard/viewStudySessions" className='text-gray-500 hover:text-red-500'>
                                    <li>All Study Session</li>
                                </Link>
                                <Link to="/dashboard/sessionForUploadMaterial" className='text-gray-500 hover:text-red-500'>
                                    <li>Upload Session Material</li>
                                </Link>
                                <Link to="/dashboard/allStudyMaterialByTutor">
                                    <li className='hover:cursor-pointer text-gray-500 hover:text-red-500'>
                                        All Study Materials By Tutor
                                    </li>
                                </Link>
                            </div>
                        )}

                        {/* Student Section */}
                        {isStudent && !isAdmin && !isTutor && (
                            <div className='flex flex-cols md:flex-row gap-4'>
                                <Link to="/dashboard/viewBookedSessions">
                                    <li className='hover:cursor-pointer text-gray-500 hover:text-red-500'>
                                        View Booked Session
                                    </li>
                                </Link>
                                <Link to="/dashboard/createNote">
                                    <li className='hover:cursor-pointer text-gray-500 hover:text-red-500'>
                                        Create Note
                                    </li>
                                </Link>
                                <Link to="/dashboard/personalNotes">
                                    <li className='hover:cursor-pointer text-gray-500 hover:text-red-500'>
                                        Manage Personal Notes
                                    </li>
                                </Link>
                                <Link to="/dashboard/allStudyMaterialByTutor">
                                    <li className='hover:cursor-pointer text-gray-500 hover:text-red-500'>
                                        All Study Materials By Tutor
                                    </li>
                                </Link>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Banner1;