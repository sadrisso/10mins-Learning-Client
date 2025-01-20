import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Login = () => {

    const { signIn, loading, setLoading, googleSignIn, githubSignIn, setUserData } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();


    const getLoginUserData = async (email) => {
        const response = await axiosSecure.get(`user/${email}`)
        setUserData(response?.data)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(async (res) => {
                await getLoginUserData(email);
                toast.success("Successfully Logged In")
                navigate("/")
                console.log("Successfully logged in", res?.user)
            })
            .catch(err => {
                console.log("ERR: ", err)
                setError(err)
                setLoading(false)
            })
    }


    const handleGoogleLogin = () => {
        googleSignIn(googleProvider)
            .then( async (res) => {
                await getLoginUserData(res?.data?.email);
                console.log(res?.user)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleGithubLogin = () => {
        githubSignIn(githubProvider)
            .then(async (res) => {
                await getLoginUserData(res?.user?.email)
                console.log(res?.user)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <div className="hero bg-[#112047] py-20 md:py-40 text-gray-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl md:text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            You must login first to access our all services and helps for your learning, Keep Learning
                        </p>
                    </div>
                    <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">
                                    {
                                        loading && <span className="loading loading-spinner loading-xs"></span>
                                    }Login</button>
                            </div>
                            <div className="p-2 text-center">
                                <button onClick={handleGoogleLogin} className="btn"> <FaGoogle /> Google</button>
                                <button onClick={handleGithubLogin} className="btn"> <FaGithub /> Github</button>
                            </div>
                        </form>
                        {
                            error && <p className="text-red-500 text-center">{error.message}</p>
                        }
                        <p className="p-2 text-center">New here? <Link to="/register"><span className="text-blue-700">Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;