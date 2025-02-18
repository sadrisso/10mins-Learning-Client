import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllTutors = () => {

    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()

    const { data: tutors = [] } = useQuery({
        queryKey: ["tutors"],
        queryFn: async () => {
            const res = await axiosSecure.get("tutors")
            setLoading(false)
            return res?.data
        }
    })


    return (
        <>
            {
                loading ?
                    <div className="py-5 text-center">
                        <span className="loading loading-dots loading-lg"></span>
                        <p className="text-2xl md:text-4xl">Please Wait</p>
                    </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 container mx-auto mb-5 px-2'>
                        {tutors.map((tutor) =>
                            <div className="card bg-[#171829]">
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
            }
        </>

    );
};

export default AllTutors;