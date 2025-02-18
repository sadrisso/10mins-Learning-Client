import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useState } from 'react';
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Register = () => {

    const { createUser, loading, update, googleSignIn, githubSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {

        const userRole = data?.role;

        const userInfo = {
            name: data?.name,
            email: data?.email,
            photo: data?.photo,
            role: data?.role
        }

        await axiosSecure.post("users", userInfo)


        createUser(data?.email, data?.password)
            .then(res => {
                toast.success("Successfully Registered")
                navigate("/")
                update({ displayName: data?.name, photoURL: data?.photo })
            })
            .catch(err => {
                console.log("ERR: ", err)
                setError(err?.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(res => {
                if (res?.user) {
                    const userInfo = {
                        email: res?.user?.email,
                        name: res?.user?.displayName,
                        role: "student"
                    }

                    axiosPublic.post("users", userInfo)
                        .then(res => {
                            console.log(res?.data)
                            navigate("/")
                        })
                }
            })
            .catch(err => {
                console.log(err?.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then((res) => {
                console.log(res?.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <div className="hero py-20 text-gray-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl md:text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            You must Register first to access our all services and helps for your learning, Keep Learning
                        </p>
                    </div>
                    <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    name='name'
                                    type="text"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                                {
                                    errors.name?.type === "required" && <p className='text-red-500'>name is required</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    name='email'
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {
                                    errors.email?.type === "required" && <p className='text-red-500'>email is required</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    {...register("photo", { required: true })}
                                    name='photo'
                                    type="url"
                                    placeholder="photo"
                                    className="input input-bordered"
                                />
                                {
                                    errors.photo?.type === "required" && <p className='text-red-500'>photo url is required</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role Here</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs"
                                    defaultValue="role"
                                    {...register("role", { required: true })}
                                    name='role'>
                                    <option value="role" disabled>Role?</option>
                                    <option>Student</option>
                                    <option>Tutor</option>
                                    <option>Admin</option>
                                </select>
                                {
                                    errors.role?.type === "required" && <p className='text-red-500'>please select a role</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true, minLength: 6 })}
                                    name='password'
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {
                                    errors.password?.type === "required" && <p className='text-red-500'>password is required</p>
                                }
                                {
                                    errors.password?.type === "minLength" && <p className='text-red-500'>password must be at least 6 character</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">
                                    {loading &&
                                        <span className="loading loading-spinner loading-xs"></span>
                                    }Register</button>
                            </div>
                        </form>
                        <div className='w-[400px] mx-auto text-center'>
                            <button onClick={handleGoogleSignIn} className='btn btn-neutral mr-2'>Google <FaGoogle /></button>
                            <button onClick={handleGithubSignIn} className='btn btn-neutral'>Github <FaGithub /></button>
                        </div>
                        <p className='text-center text-red-500'>{error}</p>
                        <p className='text-center p-2'>Have an account? <Link to="/login"><span className="text-blue-700">Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;