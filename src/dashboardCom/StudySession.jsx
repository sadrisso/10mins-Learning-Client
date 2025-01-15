// import { useState } from "react";
import axios from "axios";
import SectionTitle from "../components/SectionTitle";
import useAuth from "../hooks/useAuth";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";


const StudySession = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        console.log(data)

        const res = await axiosSecure.post("studySessions", data)
        console.log(res.data)
    }


    return (
        <div className="text-white p-5 mx-auto container">
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
                {/* <div className="space-y-3 md:space-y-1 flex flex-col md:flex-row justify-center items-center bg-gray-500 w-[330px] md:w-[660px] rounded-md mx-auto gap-2 md:gap-5 p-2 md:p-5">
                    <h2 className="text-white font-semibold">Registration Date</h2>
                    <div>
                        <DatePicker
                            {...register("regStartDate", { required: true })}
                            name="regStartDate"
                            className="rounded-sm p-2"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="registration start date" />
                    </div>
                    <div>
                        <DatePicker
                            {...register("endDate", { required: true })}
                            name="regEndDate"
                            className="rounded-sm p-2"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="registration end date" />
                    </div>
                </div> */}
                {/* <div className="space-y-3 md:space-y-1 flex flex-col md:flex-row justify-center items-center bg-gray-500 w-[330px] md:w-[660px] rounded-md mx-auto gap-2 md:gap-5 p-2 md:p-5">
                    <h2 className="text-white font-semibold">Class Date</h2>
                    <div>
                        <DatePicker
                            {...register("classStartDate", { required: true })}
                            name="classStartDate"
                            className="rounded-sm p-2"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="class start date" />
                    </div>
                    <div>
                        <DatePicker
                            {...register("classEndDate", { required: true })}
                            name="classEndDate"
                            className="rounded-sm p-2"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="class end date" />
                    </div>
                </div> */}
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
    );
};

export default StudySession;