import { useForm } from "react-hook-form";
import SectionTitle from "../components/SectionTitle";
import useAuth from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const UploadMaterial = () => {

    const navigate = useNavigate()
    const { user } = useAuth()
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const image_hosting_key = import.meta.env.VITE_img_hosting_key
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log("form data", data)

        const imageFile = { image: data.image[0] }
        axiosPublic.post(image_hosting_api, imageFile, {
            headers: { 'content-type': 'multipart/form-data' }
        })
            .then((res) => {
                if (res?.data?.success) {
                    const uploadInfo = {
                        title: data?.title,
                        link: data?.link,
                        tutorEmail: data?.tutorEmail,
                        sessionId: data?.sessionId,
                        image: res?.data?.data?.display_url
                    }

                    Swal.fire({
                        title: "Are you sure?",
                        text: "Want to upload material for this session?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes"
                    }).then(async (result) => {
                        if (result.isConfirmed) {

                            const res = await axiosSecure.post("/uploadMaterial", uploadInfo)
                            console.log(res?.data)
                            if (res?.data?.insertedId) {
                                Swal.fire({
                                    title: "Uploaded!",
                                    text: "Your file has been uploaded.",
                                    icon: "success"
                                });
                            }
                            navigate("/dashboard/allStudyMaterialByTutor")
                        }
                    });
                }
            })


    }


    return (
        <div className="min-h-screen">
            <SectionTitle heading="upload material" subHeading="upload material for this session now" />
            <form onSubmit={handleSubmit(onSubmit)} className="text-black md:space-y-2">
                <div className="text-center m-2 md:space-x-2">
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="input input-bordered w-full max-w-xs mb-2 md:mb-0" />
                    <input
                        {...register("sessionId", { required: true })}
                        readOnly
                        defaultValue={id}
                        type="text"
                        name="sessionId"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="text-center m-2 md:space-x-2">
                    <input
                        {...register("tutorEmail", { required: true })}
                        type="email"
                        name="tutorEmail"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered w-full max-w-xs mb-2 md:mb-0" />
                    <input
                        {...register("link", { required: true })}
                        type="link"
                        name="link"
                        placeholder="google drive link"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="text-center mx-auto">
                    <input
                        {...register("image", { required: true })}
                        type="file"
                        name="image"
                        placeholder="image file"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="text-center">
                    <button className="btn">Upload</button>
                </div>
            </form>
        </div>
    );
};

export default UploadMaterial;