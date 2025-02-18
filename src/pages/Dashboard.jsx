import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaHome, FaUser } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import useAdmin from '../hooks/useAdmin';
import userTutor from '../hooks/userTutor';
import useStudent from '../hooks/useStudent';
import { FiBook, FiBookOpen, FiCalendar, FiEdit, FiEye, FiFileText, FiPlusCircle, FiUpload, FiUsers } from 'react-icons/fi';

const Dashboard = () => {

    const { user } = useAuth()
    const [isAdmin] = useAdmin()
    const [isTutor] = userTutor()
    const [isStudent] = useStudent()

    return (
        <div className='flex flex-col md:flex-row'>
            {/* Sidebar */}
            <div className='bg-gradient-to-b from-[#BC44F7] to-[#6A1B9A] w-full md:w-1/5 md:min-h-screen md:fixed z-10 shadow-lg'>
                <div className='p-6 border-b border-white/10'>
                    <Link className="flex items-center justify-center gap-2" to="/">
                        <PiStudentBold className="text-3xl text-white" />
                        <span className="font-semibold text-white text-xl">Learning</span>
                    </Link>
                </div>
                <Link to="/" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200 mx-6 border-b border-white/10'>
                    <FaHome />
                    <p>Home</p>
                </Link>
                <Link to="/dashboard" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200 mx-6 border-b border-white/10'>
                    <FaHome />
                    <p>Dashboard</p>
                </Link>
                <Link to="/dashboard/profile" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200 mx-6 border-b border-white/10'>
                    <FaUser />
                    <p>Profile</p>
                </Link>
                <div className='p-6 space-y-6'>
                    {/* Admin Section */}
                    {isAdmin && (
                        <div className='space-y-4'>
                            <Link to="/dashboard/users" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiUsers className="text-xl" />
                                <span>All Users</span>
                            </Link>
                            <Link to="/dashboard/allStudyMaterialByTutor" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiBook className="text-xl" />
                                <span>All Study Materials</span>
                            </Link>
                            <Link to="/dashboard/viewStudySessions" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiCalendar className="text-xl" />
                                <span>All Study Sessions</span>
                            </Link>
                        </div>
                    )}

                    {/* Tutor Section */}
                    {isTutor && !isAdmin && (
                        <div className='space-y-4'>
                            <Link to="/dashboard/studySession" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiPlusCircle className="text-xl" />
                                <span>Create Study Session</span>
                            </Link>
                            <Link to="/dashboard/viewStudySessions" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiCalendar className="text-xl" />
                                <span>All Study Sessions</span>
                            </Link>
                            <Link to="/dashboard/sessionForUploadMaterial" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiUpload className="text-xl" />
                                <span>Upload Session Material</span>
                            </Link>
                            <Link to="/dashboard/allStudyMaterialByTutor" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiBookOpen className="text-xl" />
                                <span>All Study Materials</span>
                            </Link>
                        </div>
                    )}

                    {/* Student Section */}
                    {isStudent && !isAdmin && !isTutor && (
                        <div className='space-y-4'>
                            <Link to="/dashboard/viewBookedSessions" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiEye className="text-xl" />
                                <span>View Booked Sessions</span>
                            </Link>
                            <Link to="/dashboard/createNote" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiEdit className="text-xl" />
                                <span>Create Note</span>
                            </Link>
                            <Link to="/dashboard/personalNotes" className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiFileText className="text-xl" />
                                <span>Manage Personal Notes</span>
                            </Link>
                            <Link to={`/dashboard/studyMaterial/${user?.email}`} className='flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200'>
                                <FiBook className="text-xl" />
                                <span>Study Materials</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className='min-h-screen w-full md:w-4/5 md:ml-[20%] p-8 bg-gray-50'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;