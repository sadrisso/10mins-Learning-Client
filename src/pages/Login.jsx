import { Link } from "react-router-dom";


const Login = () => {
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
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                        </form>
                        <p className="p-2 text-center">New here? <Link to="/register"><span className="text-blue-700">Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;