
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import SectionTitle from '../components/SectionTitle';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';


const PersonalNote = () => {

    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();

    const { data: notes = [], refetch } = useQuery({
        queryKey: ["notes"],
        queryFn: async () => {
            const res = await axiosSecure.get(`myNote/${user?.email}`)
            setLoading(false)
            return res?.data;
        }
    })

    const handleRemove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`myNotes/${id}`)
                if (res?.data?.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }

    const handleBack = () => navigate(-1)


    return (
        <div className='text-white mx-auto'>
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <div>
                <SectionTitle subHeading="all your notes here" heading="Personal Notes" />
                <Link to="/dashboard/createNote"><li className='hover:cursor-pointer text-center list-none text-gray-500 hover:text-red-500 rounded-md'><a>Create Note</a></li></Link>
            </div>

            {
                loading ?
                    <div className='text-center py-10'>
                        <span className="loading loading-dots loading-lg"></span>
                        <p className="text-white text-4xl">Please Wait</p>
                    </div>
                    :
                    (
                        <div className="text-white container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 md:p-0 md:h-[800px]">
                            {notes.length > 0 ? (
                                notes.map((note, i) => (
                                    <div key={i}>
                                        <div className="card bg-neutral text-neutral-content md:h-[300px]">
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{note?.title}</h2>
                                                <p>{note?.description}</p>
                                                <p>{note?.email}</p>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/dashboard/updateNote/${note._id}`}>
                                                        <button className="btn btn-ghost"><FaPen /></button>
                                                    </Link>
                                                    <button onClick={() => handleRemove(note?._id)} className="btn btn-ghost">
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center col-span-full">
                                    <p>No notes available. Please add some notes to get started.</p>
                                </div>
                            )}
                        </div>

                    )
            }

        </div >
    );
};

export default PersonalNote;