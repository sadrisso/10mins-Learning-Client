import { RxCrossCircled } from "react-icons/rx";
import Qus from "../components/Qus";


const AdminStudySessionCard = ({ item }) => {

    const handleOpenModal = () => {
        document.getElementById('my_modal_1').showModal()
    }

    return (
        <div>
            <div className="card bg-base-200 border h-[300px] md:w-[370px]">
                <div className="card-body">
                    <h2 className="card-title">{item?.title}</h2>
                    <p>{item?.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-xs btn-success" onClick={handleOpenModal}>Accept</button>
                        <button className="btn btn-xs btn-error">Reject</button>
                    </div>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <Qus />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="text-red-500"><RxCrossCircled /></button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>


    );
};

export default AdminStudySessionCard;