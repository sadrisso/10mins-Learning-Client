import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTitle from '../components/SectionTitle';
import { IoChevronBackCircleSharp } from "react-icons/io5";


const StudyMaterialByEmail = () => {

    const { email } = useParams()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [allBookedData, setAllBookedData] = useState([])


    useEffect(() => {
        axiosSecure.get(`bookedSessions/${email}`)
            .then(res => {
                setAllBookedData(res?.data)
                setLoading(false)
            })
    }, [])

    const handleBack = () => navigate(-1)

    console.log("booked data -->", allBookedData)

    return (
        <div className="min-h-screen">
            <div>
                <div>
                    <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl m-2" /></p>
                    <SectionTitle heading="your bookings" subHeading="You booked this sessions" />
                </div>
                {
                    loading ?
                        <div className="text-center py-5">
                            <span className="loading loading-dots loading-lg"></span>
                            <p className="text-4xl">Please Wait</p>
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-2 ">
                            {allBookedData && allBookedData.length > 0 ? (
                                allBookedData.map((bookedData) => (
                                    <Link className="cursor-pointer" to={`/dashboard/bookedSession/${bookedData?.studySessionId}`}>
                                        <div
                                            key={bookedData?._id}
                                            className="text-center border md:mx-auto p-2 md:p-5 mx-5 py-8 h-[200px] bg-white">
                                            <h1 className="text-2xl">{bookedData?.sessionTitle}</h1>
                                            <p className="text-gray-400">Tutor: {bookedData?.tutorName}</p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center col-span-full py-10">
                                    <p className="text-2xl text-white">No material added yet.</p>
                                </div>
                            )}
                        </div>
                }
            </div>
        </div>
    );
};

export default StudyMaterialByEmail;
