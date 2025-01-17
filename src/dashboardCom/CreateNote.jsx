import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const CreateNote = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const noteInfo = {
            email: data?.email,
            title: data?.title,
            description: data?.description
        }


        const res = await axiosSecure.post("myNotes", noteInfo)
        if (res?.data?.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Note Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }
    }

    return (
        <div className="text-white md:min-h-screen h-[500px]">
            <div className="text-center pt-10">
                <h1 className="font-semibold text-2xl md:text-4xl ">Create Your Note Here</h1>
                <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:border p-2 w-full md:w-[600px] md:mx-auto mt-5 space-y-3 md:p-10">
                        <div>
                            <input
                                {...register("email", { require: true })}
                                type="email"
                                name="email"
                                readOnly
                                defaultValue={user?.email}
                                placeholder="Email here"
                                className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <input
                                {...register("title", { require: true })}
                                type="text"
                                name="title"
                                placeholder="Title here"
                                className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <textarea
                                {...register("description", { require: true })}
                                name="description"
                                className="textarea textarea-primary w-full max-w-xs resize-none"
                                placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-sm md:btn-wide">Create Note</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNote;