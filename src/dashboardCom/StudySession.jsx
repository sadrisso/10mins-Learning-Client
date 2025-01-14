import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const StudySession = () => {

    const { user } = useAuth()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    return (
        <div className="text-white p-5 mx-auto container">
            <SectionTitle heading="Create study session" subHeading="let's create your study session" />
            <form className="text-center space-y-3 text-black">
                <div className="space-y-3 md:space-y-1">
                    <input
                        type="text"
                        name="sessionTitle"
                        placeholder="Session Title"
                        className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                    <input
                        type="text"
                        readOnly
                        defaultValue={user?.displayName}
                        name="tutorName"
                        placeholder="Tutor Name"
                        className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="space-y-3 md:space-y-1">
                    <input
                        type="email"
                        readOnly
                        defaultValue={user?.email}
                        name="tutorEmail"
                        placeholder="Tutor Email"
                        className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                    <input
                        type="text"
                        name="sessionDescription"
                        placeholder="Session Description"
                        className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="space-y-3 md:space-y-1 flex flex-col md:flex-row justify-center items-center bg-gray-500 w-[330px] md:w-[660px] rounded-md mx-auto gap-2 md:gap-5 p-2 md:p-5">
                    <h2 className="text-white font-semibold">Registration Date</h2>
                    <div>
                        <DatePicker
                            className="rounded-sm p-2"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="registration start date" />
                    </div>
                    <div>
                        <DatePicker
                            className="rounded-sm p-2"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="registration end date" />
                    </div>
                </div>
                <div className="space-y-3 md:space-y-1 flex flex-col md:flex-row justify-center items-center bg-gray-500 w-[330px] md:w-[660px] rounded-md mx-auto gap-2 md:gap-5 p-2 md:p-5">
                    <h2 className="text-white font-semibold">Class Date</h2>
                    <div>
                        <DatePicker
                            className="rounded-sm p-2"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="class start date" />
                    </div>
                    <div>
                        <DatePicker
                            className="rounded-sm p-2"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="class end date" />
                    </div>
                </div>
                <div className="space-y-3 md:space-y-1">
                    <input
                        type="number"
                        name="sessionDuration"
                        placeholder="Session Duration"
                        className="input input-bordered input-md w-full max-w-xs md:mr-3" />
                    <input
                        type="number"
                        name="registrationFee"
                        placeholder="Registration Fee"
                        defaultValue={0}
                        className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="space-y-3 md:space-y-1">
                    <select defaultValue="pending" className="select select-bordered w-full max-w-xs">
                        <option value="pending">Pending</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default StudySession;