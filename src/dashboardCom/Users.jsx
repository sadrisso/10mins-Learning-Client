import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { useState } from "react";


const Users = () => {

    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users", search],
        queryFn: async () => {
            const res = await axiosSecure.get(`users?search=${search}`)
            setLoading(false)
            return res?.data;
        }
    })


    const handleMakeAdmin = (id) => {
        const info = {
            role: "Admin"
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Want to make admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {

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
        });
    }

    const handleRemoveAdmin = (id) => {
        const info = {
            role: "Student"
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Want to make role to student?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
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
        });
    }

    const handleBack = () => navigate(-1)

    return (
        <div className="min-h-screen bg-white">
            <div className="flex justify-evenly items-center">
                <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl m-1" /></p>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search Name or Email" onKeyUp={(e) => setSearch(e.target.value)} />
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
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Photo</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            loading ?
                                <div className="py-5 text-center">
                                    <span className="loading loading-dots loading-lg"></span>
                                    <p className="text-black text-2xl md:text-4xl">Please Wait</p>
                                </div>
                                :
                                <tbody>
                                    {
                                        users.map((user, i) =>
                                            <tr key={i}>
                                                <th>{i + 1}</th>
                                                <td>{user?.name}</td>
                                                <td>{user?.email}</td>
                                                <td><img src={user?.photo} className="w-[40px] h-[40px]" alt="" /></td>
                                                <td>{user?.role}</td>
                                                <td>
                                                    {
                                                        user?.role === "Admin" ?
                                                            <button onClick={() => handleRemoveAdmin(user?._id)} className="btn btn-sm btn-error">Remove Admin</button>
                                                            :
                                                            <button onClick={() => handleMakeAdmin(user?._id)} className="btn btn-sm mr-1 btn-success">Make Admin</button>
                                                    }


                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
