import React from 'react';
import call from '../assets/call-bg.jpg'

const Question = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img src={call} alt="" />
                <div className='absolute  text-white bottom-0 py-10  w-full h-full flex justify-center items-center'>
                    <div className='text-center '>
                        <p className='text-[#679509]'>ANY QUESTION YOU HAVE</p>
                        <p className='text-lg md:text-5xl'>879-876-987-90</p>
                        <div className='flex items-start gap-5 justify-center'>
                            <button className='bg-[#679509] px-4 py-[8px]  md:px-8 md:py-3 text-white sm:font-bold sm:text-lg hover:bg-[#2a660a]'>MAKE A CALL</button>
                            <button className='bg-white px-4 py-[8px]  md:px-8 md:py-3 text-black sm:font-bold sm:text-lg hover:bg-[#679509] hover:text-white'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;