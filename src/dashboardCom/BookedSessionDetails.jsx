import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useState } from "react";
import Swal from "sweetalert2";


const BookedSessionDetails = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
    const { id } = useParams();


    const { data } = useQuery({
        queryKey: ['bookedData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`bookedSession/${id}`)
            setLoading(false)
            return res?.data
        }
    })

    const handleBack = () => navigate(-1)

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const review = form.review.value;

        const studentReview = { review, bookedSessionId: id }

        console.log(studentReview)

        axiosSecure.post("reviews", studentReview)
            .then(res => {
                console.log(res?.data)
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="min-h-screen">
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <div className="text-white">
                <SectionTitle heading="booked details" subHeading="let's add your review" />
            </div>
            {
                loading ?
                    <div className="text-white text-center py-10">
                        <span className="loading loading-dots loading-lg"></span>
                        <p className="text-4xl">Please Wait</p>
                    </div>
                    :
                    <div className="text-center text-white md:border md:w-[500px] bg-[#0B1F24] md:mx-auto p-2 md:p-5 mx-5 py-5">
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
                                <form onSubmit={handleSubmit}>
                                    <textarea
                                        className="md:w-[420px] mt-2 text-black resize-none textarea textarea-bordered"
                                        name="review"
                                        placeholder="Review here"></textarea>
                                    <button className="btn btn-wide">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default BookedSessionDetails;