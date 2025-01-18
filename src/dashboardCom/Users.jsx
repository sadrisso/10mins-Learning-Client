import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Users = () => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("users")
            return res?.data;
        }
    })


    const handleMakeAdmin = async (id) => {
        const info = {
            role: "Admin"
        }

        const res = await axiosSecure.patch(`users/admin/${id}`, info)
        if (res?.data?.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Role updated to admin",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        }
    }

    const handleRemoveAdmin = async (id) => {
        const info = {
            role: "Student"
        }

        const res = await axiosSecure.patch(`users/admin/${id}`, info)
        if (res?.data?.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Role updated to student",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        }
    }

    const handleBack = () => navigate(-1)

    return (
        <div className="min-h-screen bg-white">
            <div className="flex justify-evenly items-center">
                <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl m-1" /></p>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search Name or Email" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <SectionTitle heading="All Users" subHeading="all our members here" />

            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Photo</th>
                                <th>Role</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td><img src={user?.photo} className="w-[40px] h-[40px]" alt="" /></td>
                                        <td>{user?.role}</td>
                                        <td className="text-center">
                                            <button onClick={() => handleMakeAdmin(user?._id)} className="btn btn-sm mr-1 btn-success">Make Admin</button>
                                            <button onClick={() => handleRemoveAdmin(user?._id)} className="btn btn-sm btn-error">Remove Admin</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
