import React, { useState } from 'react';
import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import StudySessionCard from '../components/StudySessionCard';
import AllTutors from '../components/AllTutors';
import Testimonials from '../components/Testimonials';


const Home = () => {

    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(true)

    const { data: sessions = [] } = useQuery({
        queryKey: ["sessions"],
        queryFn: async () => {
            const res = await axiosPublic.get("approvedStudySessions")
            setLoading(false)
            return res?.data
        }
    })


    return (
        <div>
            <div>
                <Banner />
            </div>

            <div className='bg-[#010313] text-white py-14'>
                {
                    loading ?
                        <div className="py-5 text-center">
                            <span className="loading loading-dots loading-lg"></span>
                            <p className="text-2xl md:text-4xl">Please Wait</p>
                        </div>
                        :
                        <div>
                            <SectionTitle heading="Approved Sessions" subHeading="let's start your study" />
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:container md:mx-auto py-2 px-2'>
                                {
                                    sessions.map((item, i) => <StudySessionCard key={i} item={item} />)
                                }
                            </div>
                        </div>
                }
            </div>

            <div>
                <SectionTitle heading="all tutors" subHeading="Meet Our Tutors" />
                <AllTutors />
            </div>

            <div className='bg-[#010313] text-white py-10'>
                <SectionTitle heading="reviews" subHeading="all reviews" />
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;