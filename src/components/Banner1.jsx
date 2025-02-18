import React from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import userTutor from '../hooks/userTutor';
import useStudent from '../hooks/useStudent';
import useAuth from '../hooks/useAuth';

const Banner1 = () => {

    const { user } = useAuth()

    return (
        <div>
            <div className='h-[500px] md:h-[900px] '>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 list-none mt-10 md:mt-5'>

                </div>
            </div>
        </div>
    );
};

export default Banner1;