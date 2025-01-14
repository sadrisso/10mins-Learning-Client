import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <div className='text-center py-10'>
                <p className='text-yellow-600 mb-3'>---{subHeading}---</p>
                <h1 className='text-2xl md:text-3xl uppercase'>{heading}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;