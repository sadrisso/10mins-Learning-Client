import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const userTutor = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isTutor } = useQuery({
        queryKey: [user?.email, "isTutor"],
        queryFn: async () => {
            const res = await axiosSecure.get(`user/tutor/${user?.email}`)
            return res?.data?.tutor
        }
    })

    return [isTutor]
};

export default userTutor;