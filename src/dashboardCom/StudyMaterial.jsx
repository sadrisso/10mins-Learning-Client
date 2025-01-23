import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import SectionTitle from '../components/SectionTitle';


const StudyMaterials = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [studyMaterial, setStudyMaterial] = useState([])

    useEffect(() => {
        axiosSecure.get(`uploadedMaterial/${id}`)
            .then(res => {
                setStudyMaterial(res?.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log("study material", studyMaterial)

    return (
        <div className='min-h-screen text-white'>
            <SectionTitle heading="Study Material" subHeading="study material by tutor" />
            <div>
                {studyMaterial.map((item, i) =>
                    <div key={i} className='border p-2 m-2'>
                        <h1>{item?.title}</h1>
                        <p>Drive Link: {item.link}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default StudyMaterials;