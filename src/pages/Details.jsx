import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Details = () => {

    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosPublic.get(`studySession/${id}`)
            .then((res) => {
                setData(res?.data)
                setLoading(false)
            })
    }, [])

    console.log(data)
    return (
        <div>

        </div>
    );
};

export default Details;