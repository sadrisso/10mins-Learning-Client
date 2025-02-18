import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import SectionTitle from '../components/SectionTitle';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useStudent from '../hooks/useStudent';

const AllStudyMaterialByTutor = () => {

    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(true)
    const [isStudent] = useStudent()

    const { data: allUploadedMaterials = [], refetch } = useQuery({
        queryKey: ["uploadedMaterials"],
        queryFn: async () => {
            const res = await axiosSecure.get("uploadedMaterials")
            setLoading(false)
            return res?.data
        }
    })

    console.log(allUploadedMaterials)


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`studyMaterial/${id}`)
                console.log(res?.data)

                if (res?.data?.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
                refetch();
            }
        });
    }

    return (
        <div className='md:min-h-screen text-center'>
            {
                loading ?
                    <div className="py-5 text-center">
                        <span className="loading loading-dots loading-lg"></span>
                        <p className="text-2xl md:text-4xl">Please Wait</p>
                    </div>
                    :
                    <div>
                        <SectionTitle heading="study materials" subHeading="all study materials" />
                        <p className='text-gray-500'>All study materials ({allUploadedMaterials?.length})</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-2'>
                            {
                                allUploadedMaterials.map((item, i) =>
                                    <div key={i} className='bg-[#E8EDEB] p-2 rounded-md'>
                                        <h1 className='text-2xl '>{item?.title}</h1>
                                        <div className=''>
                                            <p>Session id: {item?.sessionId}</p>
                                            <p>Tutor Email: {item?.tutorEmail}</p>
                                            <p>{item?.link}</p>
                                        </div>
                                        {
                                            !isStudent &&
                                            <div className='my-2'>
                                                <Link to={`/dashboard/editStudyMaterial/${item?._id}`}><button className='btn btn-xs mr-2'>Edit</button></Link>
                                                <button className='btn btn-xs' onClick={() => handleDelete(item?._id)}>Delete</button>
                                            </div>
                                        }
                                    </div>)
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default AllStudyMaterialByTutor;
