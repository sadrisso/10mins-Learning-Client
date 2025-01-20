import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { IoChevronBackCircleSharp } from "react-icons/io5";


const BookedSessionDetails = () => {

    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { id } = useParams();

    console.log(id)

    const { data } = useQuery({
        queryKey: ['bookedData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`bookedSession/${id}`)
            return res?.data
        }
    })

    const handleBack = () => navigate(-1)

    return (
        <div className="min-h-screen">
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <div className="text-white">
                <SectionTitle heading="booked details" subHeading="let's add your review" />
            </div>
            <div className="text-center text-white md:border md:w-[500px] bg-[#0B1F24] md:mx-auto p-2 md:p-5 mx-5">
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
                    <div className="mt-3">
                        <p className="text-xl">Add Review</p>
                        <textarea className="md:w-[420px] mt-2 text-black resize-none textarea textarea-bordered" placeholder="Review here"></textarea>
                        <button className="btn btn-wide">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedSessionDetails;