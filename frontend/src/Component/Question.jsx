import React from 'react';
import call from '../assets/call-bg.jpg'

const Question = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img className='h-[200px] w-full sm:h-full' src={call} alt="" />
                <div className='absolute  text-white bottom-0 py-10  w-full h-full flex justify-center items-center'>
                    <div className='text-center'>
                        <p className='text-[#679509] m-0'>ANY QUESTION YOU HAVE</p>
                        <p className='md:text-2xl m-0 py-2'>879-876-987-90</p>
                        <div className='flex items-start gap-5 justify-center '>
                            <button className='bg-[#679509] px-2 py-[6px]  md:px-8 md:py-3 text-white sm:font-bold sm:text-lg hover:bg-[#2a660a]'>MAKE A CALL</button>
                            <button className='bg-white px-2 py-[6px]  md:px-8 md:py-3 text-black sm:font-bold sm:text-lg hover:bg-[#679509] hover:text-white'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;