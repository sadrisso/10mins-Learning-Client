import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Qus = ({id}) => {

    const [paidAmount, setPaidAmount] = useState(0)
    const axiosSecure = useAxiosSecure()
    console.log(id)

    const handleSend = async () => {
        const info = {
            status: "ongoing"
        }

        const res = await axiosSecure.patch(`/studySessions/${id}`, info)
        console.log(res?.data)
    }

    return (
        <div>
            <form>
                <p>Is the session free or paid?</p>
                <p className='text-xs text-gray-400'>If free then type 0</p>
                <div className='flex flex-col justify-center'>
                    <input
                        type="number"
                        placeholder="amount?"
                        onChange={(e) => handleChange(setPaidAmount(e.target.value))}
                        className="input input-bordered w-full max-w-xs mt-2" />
                    <button onClick={handleSend} className='btn btn-sm mt-4 btn-neutral w-[70px]'>Send</button>
                </div>
            </form>
        </div>
    );
};

export default Qus;