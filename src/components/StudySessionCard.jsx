import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const StudySessionCard = ({ item }) => {

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

    const date = new Date();
    const presentDate = (moment(date).format('L'))
    const registrationEndDate = (moment(regEndDate).format('L'))

    console.log("Today:", presentDate)
    console.log("Registration End: ", registrationEndDate)

    const isRegistrationExpired = moment(registrationEndDate, 'L').isBefore(moment(presentDate, 'L'), 'day');

    console.log(isRegistrationExpired)

    return (
        <div>
            <div className="card bg-[#160929] h-[200px] md:w-[370px] md:my-10">
                <div className="card-body">
                    <h2 className="card-title">{sessionTitle}</h2>
                    {/* <div className='text-xs'>
                        <p>Registration Start Date: {regStartDate}</p>
                        <p>Registration End Date: {regEndDate}</p>
                    </div> */}
                    <p>{registrationFee === "0" ? "Free" : "$" + registrationFee}</p>
                    <div className="card-actions justify-evenly items-center">
                        {
                            isRegistrationExpired ? <button className="btn btn-xs bg-red-400">Closed</button>
                                :
                                <button className="btn btn-xs bg-[#AC46F8]">Ongoing</button>
                        }
                        <Link to={`dashboard/sessionDetails/${_id}`}><button className="btn btn-xs bg-[#7351FC]">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudySessionCard;