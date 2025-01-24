import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const EditStudyMaterial = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [studyMaterial, setStudyMaterial] = useState()

    useEffect(() => {
        axiosSecure.get(`editMaterial/${id}`)
            .then(res => {
                setStudyMaterial(res?.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const title = form.title.value;
        const uploadMaterialId = form.uploadMaterialId.value;
        const tutorEmail = form.tutorEmail.value;
        const link = form.link.value;

        const updateInfo = {
            title, uploadMaterialId, tutorEmail, link
        }

        console.log("form data", updateInfo)
        axiosSecure.patch(`editStudyMaterial/${id}`, updateInfo)
            .then(res => {
                console.log(res?.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Updated!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/dashboard/allStudyMaterialByTutor")
            })
            .catch(err => {
                console.log(err)
            })
    }


    console.log(studyMaterial)

    return (
        <div className='min-h-screen text-white'>
            <SectionTitle heading="update material" subHeading="you can modify your uploaded material" />

            <form onSubmit={handleSubmit} className="text-black md:space-y-2">
                <div className="text-center m-2 md:space-x-2">
                    <input
                        // {...register("title", { required: true })}
                        type="text"
                        name="title"
                        defaultValue={studyMaterial?.title}
                        placeholder="Title"
                        className="input input-bordered w-full max-w-xs mb-2 md:mb-0" />
                    <input
                        // {...register("uploadMaterialId", { required: true })}
                        defaultValue={studyMaterial?.uploadMaterialId}
                        type="text"
                        name="uploadMaterialId"
                        className="input input-bordered w-full max-w-xs text-black" />
                </div>
                <div className="text-center m-2 md:space-x-2">
                    <input
                        // {...register("tutorEmail", { required: true })}
                        type="email"
                        name="tutorEmail"
                        defaultValue={studyMaterial?.tutorEmail}
                        className="input input-bordered w-full max-w-xs mb-2 md:mb-0 text-black" />
                    <input
                        // {...register("link", { required: true })}
                        type="link"
                        defaultValue={studyMaterial?.link}
                        name="link"
                        placeholder="google link"
                        className="input input-bordered w-full max-w-xs text-black" />
                </div>
                <div className="text-center">
                    <button className="btn">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditStudyMaterial;