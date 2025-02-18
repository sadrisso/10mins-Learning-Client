import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

const Sessions = () => {

    const axiosPublic = useAxiosPublic()
    const [sessions, setSessions] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllSessions = async () => {
        const res = await axiosPublic.get("allStudySessions")
        console.log(res?.data)
        setSessions(res?.data)
        setLoading(false)
    }

    useEffect(() => {
        getAllSessions()
    }, [])


    console.log(sessions)

    return (
        <div className='pt-16 text-white container mx-auto'>
            <SectionTitle heading="Sessions" subHeading="all study sessions" />
            {
                loading ?
                    <div className='text-center py-5'>
                        <span className="loading loading-dots loading-lg"></span>
                        <p className="text-2xl md:text-4xl">Please Wait</p>
                    </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 '>
                        {
                            sessions.map((session, i) =>
                                <div key={i}>
                                    <div className="card bg-[#160929] text-white mx-auto shadow-xl h-[150px]">
                                        <div className="card-body">
                                            <h2 className="card-title">{session?.sessionTitle}</h2>
                                            <p className='text-gray-400'>{session?.status}</p>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default Sessions;