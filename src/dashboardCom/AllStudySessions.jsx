import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import AdminStudySessionCard from './AdminStudySessionCard';

const AllStudySessions = () => {

    const axiosSecure = useAxiosSecure()

    const { data: allSessions = [] } = useQuery({
        queryKey: ['allSessions'],
        queryFn: async () => {
            const res = await axiosSecure.get("allStudySessions")
            return res.data;
        }
    })

    console.log(allSessions)

    return (
        <div>
            <div className='text-white'>
                <SectionTitle heading="all study sessions" subHeading="checkout all" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:container md:mx-auto py-10'>
                {
                    allSessions.map((item, i) => <AdminStudySessionCard key={i} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllStudySessions;