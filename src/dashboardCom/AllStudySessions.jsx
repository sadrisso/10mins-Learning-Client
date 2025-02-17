import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import AdminStudySessionCard from './AdminStudySessionCard';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const AllStudySessions = () => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    const { data: allSessions = [], refetch } = useQuery({
        queryKey: ['allSessions'],
        queryFn: async () => {
            const res = await axiosSecure.get("allStudySessions")
            setIsLoading(false)
            return res.data;
        }
    })

    const handleBack = () => navigate(-1)

    return (
        <div className='bg-[#010313] min-h-screen'>
            {
                isLoading ?
                    <div className='text-white text-center py-5'>
                        <span className="loading loading-dots loading-lg"></span>
                        <p className="text-2xl md:text-4xl">Please Wait</p>
                    </div>
                    :
                    <div>
                        <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
                        <div>
                            <div className='text-white'>
                                <SectionTitle heading="all study sessions" subHeading="checkout all" />
                            </div>


                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:container md:mx-auto py-10 px-4 md:px-2'>
                                {
                                    allSessions.map((item, i) => <AdminStudySessionCard key={i} item={item} refetch={refetch} />)
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllStudySessions;