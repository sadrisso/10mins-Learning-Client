
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import SectionTitle from '../components/SectionTitle';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const PersonalNote = () => {

    const axiosSecure = useAxiosSecure();

    const { data: notes = [], refetch } = useQuery({
        queryKey: ["notes"],
        queryFn: async () => {
            const res = await axiosSecure.get("/myNotes")
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

        refetch()
    }


    return (
        <div className='text-white mx-auto'>
            <div>
                <SectionTitle subHeading="all your notes here" heading="Personal Notes" />
                <Link to="/dashboard/createNote"><li className='hover:cursor-pointer text-center list-none text-gray-500 hover:text-red-500 rounded-md'><a>Create Note</a></li></Link>
            </div>

            <div className='text-white container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 md:p-0 md:h-[800px]'>
                {
                    notes.map((note, i) =>
                        <div key={i}>
                            <div className="card bg-neutral text-neutral-content md:h-[300px]">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{note?.title}</h2>
                                    <p>{note?.description}</p>
                                    <p>{note?.email}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-ghost"><FaPen /></button>
                                        <button onClick={() => handleRemove(note?._id)} className="btn btn-ghost"><FaTrash /></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PersonalNote;