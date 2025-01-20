import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { FaBook } from "react-icons/fa";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";



const SessionDetails = () => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [bookedData, setBookedData] = useState()
    const [allBookedData, setAllBookedData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    const { user } = useAuth()


    useEffect(() => {
        axiosSecure.get(`studySession/${id}`)
            .then(res => {
                setData(res?.data)
                setIsLoading(false)
            })
    }, [])


    useEffect(() => {
        axiosSecure.get(`bookedSessions`)
            .then(res => {
                setAllBookedData(res?.data)
            })
    }, [])

    console.log(allBookedData)


    const handleBack = () => navigate(-1)


    const handleBooking = async () => {
        const bookingInfo = {
            studentEmail: user?.email,
            studySessionId: data?._id,
            status: "booked",
            sessionTitle: data?.sessionTitle,
            tutorName: data?.tutorName,
            tutorEmail: data?.tutorEmail,
            sessionDescription: data?.sessionDescription,
            regStartDate: data?.regStartDate,
            regEndDate: data?.regEndDate,
            classStartDate: data?.classStartDate,
            classEndDate: data?.classEndDate,
            sessionDuration: data?.sessionDuration,
            registrationFee: data?.registrationFee
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Want to book this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.post("bookedSessions", bookingInfo)
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Booking Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <div className="container mx-auto h-[600px] md:min-h-screen text-white">
                <SectionTitle heading="session details" subHeading="let's book your dream session" />
                <div className="text-center md:border md:w-[500px] bg-[#0B1F24] md:mx-auto p-2 md:p-5 mx-5">
                    {
                        isLoading ? <div><span className="loading loading-bars loading-md"></span> <br /> <p>Please Wait</p></div> :
                            <div>
                                <h1 className="text-2xl">{data?.sessionTitle}</h1>
                                <p className="text-gray-400">Tutor: {data?.tutorName}</p>
                                <p>Average Rating: </p>
                                <p className="text-gray-400">{data?.sessionDescription}</p>
                                <hr className="w-1/3 mx-auto mt-5" />
                                <div className="mt-5">
                                    <p>Registration Start Date: {data?.regStartDate}</p>
                                    <p>Registration End Date: {data?.regEndDate}</p>
                                    <p>Class Start Date: {data?.classStartDate}</p>
                                    <p>Class End Date: {data?.classEndDate}</p>
                                </div>
                                <div className="mt-5">
                                    <p>Session Duration: {data?.sessionDuration}hr</p>
                                    <p>Registration Fee: ${data?.registrationFee}</p>
                                    <p>Review: </p>
                                </div>
                                <div className="mt-5">
                                    {
                                        data?.booked === true ?
                                        <button className="btn btn-disabled">Booked</button> :
                                        <button onClick={handleBooking} className="btn btn-sm md:btn-md bg-[#43282D] text-white"> <FaBook /> Book Now</button>
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SessionDetails;


// tutorEmail: data?.tutorEmail,
//     tutorName: data?.tutorName,
//         sessionTitle: data?.sessionTitle,
//             sessionDescription: data?.sessionDescription,