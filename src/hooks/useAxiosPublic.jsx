
import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: "https://10min-learning-server.vercel.app/"
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;