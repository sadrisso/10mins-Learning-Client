
import { useForm } from "react-hook-form";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateNote = () => {

    const axiosSecure = useAxiosSecure()
    const data = useLoaderData()
    const navigate = useNavigate()
    const { title, email, description, _id } = data;

    const handleBack = () => navigate(-1)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        console.log(data)

        const res = await axiosSecure.patch(`updateNote/${_id}`, data)
        console.log(res?.data)
        if (res?.data?.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/dashboard/personalNotes")
        }
    }

    return (
        <div>
            <p className="p-3" onClick={handleBack}><IoChevronBackCircleSharp className="text-3xl text-white m-2" /></p>
            <div className="md:min-h-[810px] py-10 md:py-2 text-white flex items-center justify-center">
                <form className="border p-10 md:p-20 text-center text-black" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center text-2xl mb-3 text-gray-300 font-semibold">Edit Note</h1>
                    <div>
                        <input
                            {...register("email", { required: true })}
                            defaultValue={email}
                            readOnly
                            name="email"
                            type="email"
                            placeholder="Email Here"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="my-3">
                        <input
                            {...register("title", { required: true })}
                            defaultValue={title}
                            name="title"
                            type="text"
                            placeholder="Title Here"
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.title?.type === "required" && <p className='text-red-400'>title is required</p>
                        }
                    </div>
                    <div>
                        <textarea
                            {...register("description", { required: true })}
                            defaultValue={description}
                            name="description"
                            className="textarea textarea-bordered resize-none h-[200px] w-[300px]"
                            placeholder="Description"></textarea>
                        {
                            errors.description?.type === "required" && <p className='text-red-400'>description is required</p>
                        }
                    </div>
                    <div>
                        <button className="btn btn-sm btn-info text-white mt-2">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateNote;