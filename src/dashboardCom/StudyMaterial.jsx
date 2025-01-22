import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';

const StudyMaterials = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [studyMaterial, setStudyMaterial] = useState({})

    useEffect(() => {
        axiosSecure.get(`uploadedMaterials/${id}`)
            .then(res => {
                console.log(res?.data)
                setStudyMaterial(res?.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log("study material", studyMaterial)

    return (
        <div className='min-h-screen text-white'>
            Study Material
        </div>
    );
};

export default StudyMaterials;