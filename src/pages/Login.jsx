import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";


const Login = () => {

    const { signIn, loading } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                toast.success("Successfully Logged In")
                navigate("/")
                console.log("Successfully logged in", res?.user)
            })
            .catch(err => {
                console.log("ERR: ", err)
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
                        </form>
                        <p className="p-2 text-center">New here? <Link to="/register"><span className="text-blue-700">Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;