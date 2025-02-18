import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SectionTitle from "../components/SectionTitle";


const StudyMaterialById = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [materials, setMaterials] = useState([])
    console.log(id)

    useEffect(() => {
        axiosSecure.get(`uploadedMaterial/${id}`)
            .then(res => {
                console.log(res?.data)
                setMaterials(res?.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="min-h-screen">
            <div>
                <SectionTitle heading="All Materials" subHeading="materials added by tutor" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2 mx-auto container">
                {materials && materials.length > 0 ? (
                    materials.map((material, i) => (
                        <div key={i} className="text-center md:border md:w-[500px] bg-[#E8EDEB] md:mx-auto p-2 md:p-5 mx-5 py-8">
                            <h1 className="text-2xl">{material?.title}</h1>
                            <img src={material?.image} alt="" className="w-[200px] h-[150px] mx-auto" />
                            <p className="text-gray-400">Tutor: {material?.tutorEmail}</p>
                            <p>Google Drive: {material?.link}</p>
                        </div>
                    ))
                ) : (
                    <div className="text-center col-span-full py-10">
                        <p className="text-2xl text-white">No material added yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudyMaterialById;