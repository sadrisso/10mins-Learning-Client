import React from 'react';
import error from '../../public/errorLottieAnimation.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center text-2xl'>
            <Link className='btn btn-warning text-orange-500' to="/">Back to Home</Link>
            <Lottie animationData={error} loop={true} className='text-2xl'></Lottie>
        </div>
    );
};

export default ErrorPage;