import { Link } from "react-router-dom";
import logo from "../../public/img/10minLogo.jpg"


const Navbar = () => {


    return (
        <div className="flex flex-col md:flex-row md:justify-between p-3 container mx-auto items-center">
            <div className="flex items-center">
                <img src={logo} alt="" className="w-[55px] h-[55px]" />
                <span className="font-semibold">Learning</span>
            </div>

            <div>
                <ul className="flex flex-col md:flex-row gap-5 items-center">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <button className="btn">LogIn</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;