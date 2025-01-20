import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTitle from "../components/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";


const AllBookedSessions = () => {

    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [allBookedData, setAllBookedData] = useState([])

    useEffect(() => {
        axiosSecure.get(`bookedSessions`)
            .then(res => {
                setAllBookedData(res?.data)
            })
    }, [])

    const handleBack = () => navigate(-1)

    return (
        <div className="text-white md:min-h-screen">
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <SectionTitle heading="All Booked Sessions" subHeading="let's check your booked sessions" />
            <h1 className="text-center mb-2 text-gray-500 text-[15px]">Booked sessions ({allBookedData?.length})</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto container">
                {
                    allBookedData.map((bookedData) =>
                        <div className="text-center md:border md:w-[500px] bg-[#0B1F24] md:mx-auto p-2 md:p-5 mx-5">
                            <h1 className="text-2xl">{bookedData?.sessionTitle}</h1>
                            <p className="text-gray-400">Tutor: {bookedData?.tutorName}</p>
                            <Link to={`/dashboard/bookedSessionDetails/${bookedData?._id}`}><button className="btn btn-wide">View Details</button></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllBookedSessions;
