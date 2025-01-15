import React from 'react';
import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import StudySessionCard from '../components/StudySessionCard';
import AllTutors from '../components/AllTutors';


const Home = () => {

    const axiosPublic = useAxiosPublic();

    const { data: sessions = [] } = useQuery({
        queryKey: ["sessions"],
        queryFn: async () => {
            const res = await axiosPublic.get("approvedStudySessions")
            return res?.data
        }
    })


    return (
        <div>
            <div>
                <Banner />
            </div>

            <div>
                <SectionTitle heading="Study Sessions" subHeading="let's start your study" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:container md:mx-auto py-10 px-2'>
                    {
                        sessions.map((item, i) => <StudySessionCard key={i} item={item} />)
                    }
                </div>
            </div>

            <div>
                <SectionTitle heading="all tutors" subHeading="Meet Out Tutors" />
                <AllTutors />
            </div>
        </div>
    );
};

export default Home;