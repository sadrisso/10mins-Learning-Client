import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: "https://10min-learning-server.vercel.app/"
})

const useAxiosSecure = () => {

    const navigate = useNavigate()
    const { logOut } = useAuth()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("token")
        console.log("req stopped by interceptors", token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (err) {
        return Promise.reject(err)
    })


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const statusCode = error?.response?.status;

        if (statusCode === 401 || statusCode === 403) {
            await logOut()
            navigate("/login")
        }

        console.log("Error in the interceptor response", statusCode)
        return Promise.reject(error);
    });

    return axiosSecure
};

export default useAxiosSecure;