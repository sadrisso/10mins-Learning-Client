import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role Here</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Role?</option>
                                    <option>Student</option>
                                    <option>Tutor</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
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