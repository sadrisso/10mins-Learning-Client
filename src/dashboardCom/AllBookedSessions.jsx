import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTitle from "../components/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";


const AllBookedSessions = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
    const [allBookedData, setAllBookedData] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        axiosSecure.get(`bookedSessions/${user?.email}`)
            .then(res => {
                setAllBookedData(res?.data)
                setLoading(false)
            })
    }, [])

    const handleBack = () => navigate(-1)

    return (
        <div className="text-white md:min-h-screen">
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <SectionTitle heading="All Booked Sessions" subHeading="let's check your booked sessions" />
            <h1 className="text-center mb-2 text-gray-500 text-[15px]">Booked sessions ({allBookedData?.length})</h1>

            {
                loading ?
                    <div className="text-center">
                        <span className="loading loading-dots loading-lg"></span>
                        <p className="text-white text-4xl">Please Wait</p>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2 mx-auto container">
                        {allBookedData && allBookedData.length > 0 ? (
                            allBookedData.map((bookedData) => (
                                <div
                                    key={bookedData?._id}
                                    className="text-center md:border md:w-[500px] bg-[#0B1F24] md:mx-auto p-2 md:p-5 mx-5 py-8"
                                >
                                    <h1 className="text-2xl">{bookedData?.sessionTitle}</h1>
                                    <p className="text-gray-400">Tutor: {bookedData?.tutorName}</p>
                                    <Link to={`/dashboard/bookedSessionDetails/${bookedData?._id}`}>
                                        <button className="btn btn-wide">View Details</button>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="text-center col-span-full py-10">
                                <p className="text-2xl text-white">No sessions booked yet.</p>
                            </div>
                        )}
                    </div>

            }
        </div>
    );
};

export default AllBookedSessions;
