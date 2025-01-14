import React from 'react';

const StudySessionCard = ({ item }) => {

    return (
        <div>
            <div className="card bg-base-100 border h-[300px] md:w-[370px]">
                <div className="card-body">
                    <h2 className="card-title">{item?.title}</h2>
                    <p>{item?.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-xs">Ongoing</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudySessionCard;