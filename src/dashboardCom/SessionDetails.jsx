import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { FaBook } from "react-icons/fa";
import { IoChevronBackCircleSharp } from "react-icons/io5";


const SessionDetails = () => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()


    axiosSecure.get(`/studySession/${id}`)
        .then(res => {
            setData(res?.data)
            setIsLoading(false)
        })


    const { sessionTitle,
        tutorName,
        tutorEmail,
        sessionDescription,
        regStartDate, regEndDate,
        classStartDate,
        classEndDate,
        sessionDuration,
        registrationFee,
        status } = data;

    const handleBack = () => navigate(-1)

    return (
        <div>
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <div className="container mx-auto h-[600px] md:min-h-screen text-white">
                <SectionTitle heading="session details" subHeading="let's book your dream session" />
                <div className="text-center md:border md:w-[500px] bg-[#0B1F24] md:mx-auto p-2 md:p-5 mx-5">
                    {
                        isLoading ? <div><span className="loading loading-bars loading-md"></span> <br /> <p>Please Wait</p></div> :
                            <div>
                                <h1 className="text-2xl">{sessionTitle}</h1>
                                <p className="text-gray-400">Tutor: {tutorName}</p>
                                <p>Average Rating: </p>
                                <p className="text-gray-400">{sessionDescription}</p>
                                <hr className="w-1/3 mx-auto mt-5" />
                                <div className="mt-5">
                                    <p>Registration Start Date: {regStartDate}</p>
                                    <p>Registration End Date: {regEndDate}</p>
                                    <p>Class Start Date: {classStartDate}</p>
                                    <p>Class End Date: {classEndDate}</p>
                                </div>
                                <div className="mt-5">
                                    <p>Session Duration: {sessionDuration}hr</p>
                                    <p>Registration Fee: ${registrationFee}</p>
                                    <p>Review: </p>
                                </div>
                                <div className="mt-5">
                                    <button className="btn btn-sm md:btn-md bg-[#43282D] text-white"> <FaBook /> Book Now</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SessionDetails;