import React from 'react';
import subscribe from '../assets/subscribe.png'

const Newsletter = () => {
    return (
        <div className='grid grid-cols-1 p-20 items-center gap-10 lg:grid-cols-2 bg-[#10111e]'>
            <div className='flex gap-3 items-center'>
                <img src={subscribe} alt="" />
                <div>
                    <h1 className='font-bold text-4xl text-white mb-0'>Newsletter</h1>
                    <h5 className='text-[#9f9f9f] text-xl mt-[3px]'>Subscribe here for get every single updates</h5>
                </div>
            </div>
            <div>
                <div className='flex items-center'>
                    <input className='bg-[#141626] text-white outline-none p-3 w-[50%]' type="text" placeholder='ENTER YOUR EMAIL ADDRESS' />
                    <button className='text-white bg-[#679509] p-3'>SUBSCRIBE NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;