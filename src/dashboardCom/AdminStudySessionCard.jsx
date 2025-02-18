import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import userTutor from "../hooks/userTutor";

const AdminStudySessionCard = ({ item, refetch }) => {

    const axiosSecure = useAxiosSecure()
    const [isTutor] = userTutor()

    const { sessionTitle,
        _id,
        tutorName,
        tutorEmail,
        sessionDescription,
        regStartDate, regEndDate,
        classStartDate,
        classEndDate,
        sessionDuration,
        registrationFee,
        status } = item;


    const handleAcceptSeassion = async (id) => {

        const info = {
            status: "ongoing"
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Want to accept this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`studySessions/${id}`, info)
                if (res?.data?.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status Ongoing",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        });
    }


    const handleStopSession = async (id) => {

        const info = {
            status: "pending"
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Want to stop this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`studySessions/${id}`, info)
                if (res?.data?.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status pending",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        });
    }


    const handleRejectSession = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Want to close this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`studySession/${id}`)
                if (res?.data?.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Closed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        });
    }

    return (
        <div>
            <div className="card h-[300px] border bg-[#E8EDEB]">
                <div className="card-body">
                    <h2 className="card-title">{sessionTitle}</h2>
                    <p>{sessionDescription}</p>
                    <p>Status: {status}</p>
                    <p>{registrationFee === "0" ? "Free" : "$" + registrationFee}</p>
                    {
                        !isTutor &&
                        <div className="card-actions justify-center">
                            {
                                status === "ongoing" ?
                                    <button className="btn btn-xs btn-warning" onClick={() => handleStopSession(_id)}>Stop</button>
                                    :
                                    <button className="btn btn-xs btn-success" onClick={() => handleAcceptSeassion(_id)}>Accept</button>
                            }
                            <button onClick={() => handleRejectSession(_id)} className="btn btn-xs btn-error">Reject</button>
                        </div>
                    }
                </div>
            </div>
        </div>


    );
};


export default AdminStudySessionCard;