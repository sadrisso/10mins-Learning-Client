import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const StudySessions = () => {

    const axiosSecure = useAxiosSecure()


    const { data: allSessions = [], refetch } = useQuery({
        queryKey: ['allSessions'],
        queryFn: async () => {
            const res = await axiosSecure.get("allStudySessions")
            setIsLoading(false)
            return res.data;
        }
    })

    console.log(allSessions)

    return (
        <div className='text-white min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:container md:mx-auto py-10 px-4 md:px-2'>
                {
                    allSessions.map((item, i) =>
                        <div key={i} className='border m-2 p-2'>
                            <p>Session Title: <span className='text-gray-300'>{item?.sessionTitle}</span></p>
                            <div className='text-xs text-gray-400 mb-2'>
                                <p>{item?.tutorName}</p>
                                <p>{item?.tutorEmail}</p>
                            </div>
                            {
                                item?.status === 'ongoing' ?
                                <Link to={`/dashboard/uploadMaterial/${item?._id}`}><button className="btn btn-xs">Upload Material For this Session</button></Link>
                                :
                                <p className='text-red-500 text-xs'>This session is not approved by admin</p>
                            }
                        </div>)
                }
            </div>
        </div>
    );
};

export default StudySessions;