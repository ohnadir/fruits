import React from 'react';
import '../Style/Deal.css';
import deal from "../assets/deal.png"

export const Deal = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 my-16'>
            <div className='md:flex-row flex items-center gap-10 flex-col'>
                <div>
                    <img src={deal} alt="" />
                </div>
                <div>
                    <div className='timerContainer'>
                        <h2 className='m-0 text-left text-[#679509]'>TODAYS HOT DEALS</h2>
                        <h1 className='m-0 font-extrabold text-2xl sm:text-3xl mt-2'>Original Stock Honey Combo Package</h1>
                        <div className='flex gap-10 items-center  my-6'>
                            <div>
                                <p className='timeContainer'>1</p>
                                <p>DAYS</p>
                            </div>
                            <div>
                                <p className='timeContainer'>2</p>
                                <p>HOURS</p>
                            </div>
                            <div>
                                <p className='timeContainer'>3</p>
                                <p>MINUTES</p>
                            </div>
                            <div>
                                <p className='timeContainer'>4</p>
                                <p>DAYS</p>
                            </div>
                        </div>
                        <button className='shopBtn'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
