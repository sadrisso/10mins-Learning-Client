import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const EditStudyMaterial = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [studyMaterial, setStudyMaterial] = useState({})

    useEffect(() => {
        axiosSecure.get(`uploadedMaterial/${id}`)
            .then(res => {
                setStudyMaterial(res?.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log("form data", data)

        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "Want to update material for this session?",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes"
        // }).then(async (result) => {
        //     if (result.isConfirmed) {

        //             Swal.fire({
        //                 title: "Uploaded!",
        //                 text: "Your file has been uploaded.",
        //                 icon: "success"
        //             });

        //     }
        // });
    }


    console.log(studyMaterial)

    return (
        <div className='min-h-screen text-white'>
            <SectionTitle heading="update material" subHeading="you can modify your uploaded material" />

            <form onSubmit={handleSubmit(onSubmit)} className="text-black md:space-y-2">
                <div className="text-center m-2 md:space-x-2">
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        name="title"
                        defaultValue={studyMaterial?.title}
                        placeholder="Title"
                        className="input input-bordered w-full max-w-xs mb-2 md:mb-0" />
                    <input
                        {...register("uploadMaterialId", { required: true })}
                        defaultValue={studyMaterial?.uploadMaterialId}
                        type="text"
                        name="uploadMaterialId"
                        className="input input-bordered w-full max-w-xs text-black" />
                </div>
                <div className="text-center m-2 md:space-x-2">
                    <input
                        {...register("tutorEmail", { required: true })}
                        type="email"
                        name="tutorEmail"
                        defaultValue={studyMaterial?.tutorEmail}
                        className="input input-bordered w-full max-w-xs mb-2 md:mb-0 text-black" />
                    <input
                        {...register("link", { required: true })}
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