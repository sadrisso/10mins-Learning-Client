import React from 'react';
import useAuth from '../hooks/useAuth';

const Profile = () => {

    const { user } = useAuth()

    console.log(user)

    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
                {/* Profile Header */}
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-gray-900'>Profile</h1>
                    <p className='mt-4 text-lg text-gray-600'>
                        Manage your account information and settings.
                    </p>
                </div>

                {/* Profile Card */}
                <div className='bg-white p-8 rounded-lg shadow-lg'>
                    <div className='flex flex-col items-center space-y-6'>
                        {/* Profile Picture */}
                        <img
                            src={user.photoURL}
                            alt='Profile'
                            className='w-32 h-32 rounded-full border-4 border-blue-500'
                        />

                        {/* Display Name */}
                        <h2 className='text-2xl font-bold text-gray-900'>{user.displayName}</h2>

                        {/* Email */}
                        <div className='flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6 text-blue-500'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                />
                            </svg>
                            <p className='text-gray-700'>{user.email}</p>
                        </div>

                        {/* Email Verification Status */}
                        <div className='flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6 text-blue-500'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>
                            <p className='text-gray-700'>
                                {user.emailVerified ? 'Email Verified' : 'Email Not Verified'}
                            </p>
                        </div>

                        {/* Provider Information */}
                        <div className='flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6 text-blue-500'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                                />
                            </svg>
                            <p className='text-gray-700'>
                                Signed in with {user.providerData[0].providerId}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;