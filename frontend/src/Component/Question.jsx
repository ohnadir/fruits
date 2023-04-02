import React from 'react';
import call from '../assets/call-bg.jpg'
import "../Style/Question.scss"

const Question = () => {
    return (
        <div className='question'>
            <div className='relative'>
                <img className='h-[200px] w-full sm:h-full' src={call} alt="" />
                <div className='absolute  text-white bottom-0 py-10  w-full h-full flex justify-center items-center'>
                    <div className='text-center'>
                        <p className='text-[#679509] m-0 text-[15px]'>ANY QUESTION YOU HAVE</p>
                        <p className='text-2xl m-0 py-3'>879-876-987-90</p>
                        <div className='flex items-start gap-1 justify-center '>
                            <button className='make-button'>Make a call</button>
                            <button className=' contact-button'>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;