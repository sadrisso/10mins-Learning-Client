import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/navigation'; // Import Navigation CSS

const Testimonials = () => {
    const axiosPublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosPublic.get("reviews")
            .then(res => {
                console.log(res?.data);
                setReviews(res?.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [axiosPublic]);

    return (
        <div>
            <div className='md:p-20'>
                {/* Swiper Component */}
                <Swiper
                    navigation={true} // Enable navigation
                    modules={[Navigation]} // Add Navigation module
                    className="mySwiper"
                >
                    {reviews.map((review, i) => (
                        <SwiperSlide key={i}>
                            <div className='md:w-2/3 mx-auto'>
                                {/* Rating Component (Assuming you have a Rating component) */}
                                {/* <Rating className='mx-auto' style={{ maxWidth: 250 }} /> */}
                                <div className='text-center my-5'>
                                    <i className="fa-solid fa-quote-left text-8xl"></i>
                                </div>
                            </div>
                            <div className='md:w-2/3 text-center mx-auto'>
                                <p className='text-xl md:text-3xl px-10'>{review?.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;