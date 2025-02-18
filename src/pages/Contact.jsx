import React from 'react';

const Contact = () => {
    return (
        <div className='min-h-[clac(100vh-80px)] text-white py-16 px-4 sm:px-6 lg:px-8'>
            {/* Page Header */}
            <div className='text-center my-12 text-white'>
                <h1 className='text-4xl font-bold'>Contact Us</h1>
                <p className='mt-4 text-lg text-gray-400'>
                    We'd love to hear from you! Reach out to us for any questions or feedback.
                </p>
            </div>

            {/* Contact Content Grid */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Contact Form */}
                <div className='bg-[#150F2D] text-gray-400 p-8 rounded-lg shadow-lg'>
                    <h2 className='text-2xl font-bold mb-6'>Send Us a Message</h2>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Your Name'
                                className='mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='your.email@example.com'
                                className='mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                rows='5'
                                placeholder='Your message...'
                                className='mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information and Map */}
                <div className='space-y-8'>
                    {/* Contact Information */}
                    <div className='bg-[#150F2D] text-gray-400 p-8 rounded-lg shadow-lg'>
                        <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
                        <div className='space-y-4'>
                            <div className='flex items-center gap-4'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6 text-blue-500'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                </svg>
                                <p className='text-gray-700'>123 Learning Street, Knowledge City, Edu 45678</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6 text-blue-500'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                    />
                                </svg>
                                <p className='text-gray-700'>(123) 456-7890</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6 text-blue-500'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                    />
                                </svg>
                                <p className='text-gray-700'>support@learningplatform.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Embedded Map */}
                    <div className='bg-[#150F2D] p-8 rounded-lg shadow-lg'>
                        <h2 className='text-2xl font-bold text-gray-400 mb-6'>Our Location</h2>
                        <div className='overflow-hidden rounded-lg'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a6c8f4f4f4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633033226784!5m2!1sen!2sus'
                                width='100%'
                                height='300'
                                style={{ border: 0 }}
                                allowFullScreen=''
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;