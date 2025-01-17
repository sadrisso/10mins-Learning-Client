// import { useState } from "react";
import axios from "axios";
import SectionTitle from "../components/SectionTitle";
import useAuth from "../hooks/useAuth";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";


const StudySession = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        console.log(data)

        const res = await axiosSecure.post("studySessions", data)
        console.log(res.data)
        if (res?.data?.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Study Session Posted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }
    }

    const handleBack = () => navigate(-1)


    return (
        <div>
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <div className="text-white pb-10 mx-auto container">
                <SectionTitle heading="Create study session" subHeading="let's create your study session" />

                <form className="text-center space-y-3 text-black" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-3 md:space-y-1">
                        <input
                            type="text"
                            {...register("sessionTitle", { required: true })}
                            name="sessionTitle"
                            placeholder="Session Title"
                            className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                        <input
                            type="text"
                            readOnly
                            defaultValue={user?.displayName}
                            {...register("tutorName", { required: true })}
                            name="tutorName"
                            placeholder="Tutor Name"
                            className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className="space-y-3 md:space-y-1">
                        <input
                            type="email"
                            readOnly
                            defaultValue={user?.email}
                            {...register("tutorEmail", { required: true })}
                            name="tutorEmail"
                            placeholder="Tutor Email"
                            className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                        <input
                            type="text"
                            name="sessionDescription"
                            {...register("sessionDescription", { required: true })}
                            placeholder="Session Description"
                            className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className="space-y-3 md:space-y-1">
                        <input
                            type="text"
                            name="regStartDate"
                            {...register("regStartDate", { required: true })}
                            placeholder="Registration Start Date"
                            className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                        <input
                            type="text"
                            name="regEndDate"
                            {...register("regEndDate", { required: true })}
                            placeholder="Registration End Date"
                            className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className="space-y-3 md:space-y-1">
                        <input
                            type="text"
                            name="classStartDate"
                            {...register("classStartDate", { required: true })}
                            placeholder="Class Start Date"
                            className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                        <input
                            type="text"
                            name="classEndDate"
                            {...register("classEndDate", { required: true })}
                            placeholder="Class End Date"
                            className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className="space-y-3 md:space-y-1">
                        <input
                            type="number"
                            name="sessionDuration"
                            {...register("sessionDuration", { required: true })}
                            placeholder="Session Duration"
                            className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                        <input
                            type="number"
                            name="registrationFee"
                            {...register("registrationFee", { required: true })}
                            placeholder="Registration Fee"
                            defaultValue={0}
                            className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className="space-y-3 md:space-y-1">
                        <select
                            {...register("status", { required: true })}
                            name="status"
                            defaultValue="pending"
                            className="select select-bordered w-full max-w-xs">
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <button className="btn btn-info md:btn-wide">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default StudySession;