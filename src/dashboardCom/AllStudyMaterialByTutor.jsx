import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import SectionTitle from '../components/SectionTitle';

const AllStudyMaterialByTutor = () => {

    const axiosSecure = useAxiosSecure()

    const { data } = useQuery({
        queryKey: ["uploadedMaterials"],
        queryFn: async () => {
            const res = await axiosSecure.get("uploadedMaterials")
            return res?.data
        }
    })

    console.log(data)

    return (
        <div className='text-white md:min-h-screen text-center'>
            <SectionTitle heading="study materials" subHeading="all study materials" />
            <p className='text-gray-500'>All study materials ({data?.length})</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto px-2'>
                {
                    data.map((item, i) =>
                        <div key={i} className='border p-2'>
                            <h1 className='text-2xl text-gray-300'>{item?.title}</h1>
                            <div className='text-gray-500'>
                                <p>Upload id: {item?.uploadMaterialId}</p>
                                <p>Tutor Email: {item?.tutorEmail}</p>
                                <p>{item?.link}</p>
                            </div>
                            <div>
                                <button className='btn btn-xs mr-2'>Edit</button>
                                <button className='btn btn-xs'>Delete</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllStudyMaterialByTutor;