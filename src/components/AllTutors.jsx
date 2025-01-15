import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AllTutors = () => {

    const [tutors, setTutors] = useState([])
    const axiosSecure = useAxiosSecure()
    axiosSecure.get("/tutor")
        .then(res => setTutors(res.data))


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 container mx-auto mb-5 px-2'>
            {tutors.map((tutor) =>
                <div className="card bg-base-100 border">
                    <figure className="px-10 pt-10">
                        <img
                            src={tutor.photo}
                            alt="Shoes"
                            className="rounded-full w-[100px] h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: {tutor.name}</h2>
                        <p>{tutor.email}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllTutors;