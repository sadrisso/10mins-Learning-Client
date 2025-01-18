import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTitle from "../components/SectionTitle";


const Users = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("users")
            return res?.data;
        }
    })


    return (
        <div className="min-h-screen bg-white">
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
