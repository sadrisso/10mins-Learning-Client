import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutUs = () => {
    return (
        <div className='pt-20 bg-[#0C0518] min-h-[calc(100vh-200px)] flex justify-center items-center text-white'>
            <div className='text-center md:bg-[#181024] md:p-20'>
                <h2 className='text-3xl mb-4'>About Us</h2>
                <p className='md:w-[600px] px-5'>The Collaborative Study Platform connects students, tutors, and admins for seamless study sessions, resource sharing, and efficient management, enhancing modern education</p>
            </div>
        </div>
    );
};

export default AboutUs;