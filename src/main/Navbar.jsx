import { Link } from "react-router-dom";
import logo from "../../public/img/10minLogo.jpg"


const Navbar = () => {


    return (
        <div className="flex flex-col md:flex-row md:justify-between p-1 container mx-auto items-center">
            <div className="flex items-center">
                <img src={logo} alt="" className="w-[55px] h-[55px]" />
                <span className="font-semibold">Learning</span>
            </div>

            <div>
                <ul className="flex gap-3 md:gap-5 items-center">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/login"><button className="btn btn-sm md:btn-md bg-[#1CAB55] text-white">LogIn</button></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

// #12121A