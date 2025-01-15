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

    return (
        <div>
            <div className="card bg-base-200 border h-[300px] md:w-[370px]">
                <div className="card-body">
                    <h2 className="card-title">{sessionTitle}</h2>
                    <p>{sessionDescription}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-xs">Ongoing</button>
                        <Link to={`dashboard/sessionDetails/${_id}`}><button className="btn btn-xs">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudySessionCard;