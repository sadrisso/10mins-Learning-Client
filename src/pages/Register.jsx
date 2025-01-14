import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';


const Register = () => {

    const { createUser, loading, update } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)

        createUser(data?.email, data?.password)
            .then(res => {
                toast.success("Successfully Registered")
                navigate("/")
                update({displayName: data?.name, photoURL: data?.photo})
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
    }


    return (
        <div>
            <div className="hero bg-[#3B1318] py-20 text-gray-400">
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
                        <p className='text-center p-2'>Have an account? <Link to="/login"><span className="text-blue-700">Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;