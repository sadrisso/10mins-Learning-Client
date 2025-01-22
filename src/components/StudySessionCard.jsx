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
            <div className="card bg-base-200 border h-[300px] md:w-[370px]">
                <div className="card-body">
                    <h2 className="card-title">{sessionTitle}</h2>
                    <p>{sessionDescription}</p>
                    <div className='text-xs'>
                        <p>Registration Start Date: {regStartDate}</p>
                        <p>Registration End Date: {regEndDate}</p>
                    </div>
                    <p>{registrationFee === "0" ? "Free" : "$" + registrationFee}</p>
                    <div className="card-actions justify-end">
                        {
                            isRegistrationExpired ? <button className="btn btn-xs btn-outline">Closed</button>
                                :
                                <button className="btn btn-xs btn-outline">Ongoing</button>
                        }
                        <Link to={`dashboard/sessionDetails/${_id}`}><button className="btn btn-xs bg-[#198B46] text-white">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudySessionCard;