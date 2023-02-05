import React from 'react';
import { Carousel } from 'antd';
import header1 from '../assets/slider1.jpg'
import header2 from '../assets/slider2.jpg'
import subHeder1 from '../assets/hr1.png'
import subHeder2 from '../assets/hr2.png'



const Header = () => {
    
    return (
        <div>
            <Carousel autoplay className=''>
                <div className="relative overflow-x-hidden">
                    <img
                        src={ header1}
                        className="lg:h-[700px] w-full "
                        alt="Motorbike Smoke"
                    />
                    <div className=" bg-[#f6f8f9] bg-opacity-30 absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                        <div className='flex gap-8'>
                            <div>
                                <h5 className="text-lg sm:text-xl md:text-2xl">Organic and fresh food</h5>
                                <h1 className='text-xl sm:text-3xl md:text-5xl font-bold py-2'>Get freshness delivered <br /> on your doorstep.</h1>
                                <div className='flex gap-10 justify-center'>
                                    <button className='bg-[rgb(103,149,9)] px-4 py-[8px]  md:px-8 md:py-3 text-white sm:font-bold sm:text-lg'>Shop Now</button>
                                    <button className='bg-white px-4 py-[8px]  md:px-8 md:py-3 text-black sm:font-bold sm:text-lg'>Category</button>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <div className='w-[150px] h-[150px]
                                 bg-white rounded-full pb-[20px]'>
                                    <img className='' src={ subHeder1} alt="" />
                                </div>
                                <div
                                    className='w-[150px] h-[150px]
                                     bg-white rounded-full absolute right-[270px]'>
                                    <img src={subHeder2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" relative">
                    <img
                        src={header2}
                        className="lg:h-[700px] w-full"
                        alt="Motorbike Smoke"
                    />
                    <div className=" bg-[#f6f8f9] bg-opacity-30 absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                    <div className='flex gap-8'>
                            <div>
                                <h5 className="text-lg sm:text-xl md:text-2xl">Organic and fresh food</h5>
                                <h1 className='text-xl sm:text-3xl md:text-5xl font-bold py-2'>Get freshness delivered <br /> on your doorstep.</h1>
                                <div className='flex gap-10 justify-center'>
                                    <button className='bg-[#679509] px-4 py-[8px]  md:px-8 md:py-3 text-white sm:font-bold sm:text-lg'>Shop Now</button>
                                    <button className='bg-white px-4 py-[8px]  md:px-8 md:py-3 text-black sm:font-bold sm:text-lg'>Category</button>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <div className='w-[150px] h-[150px]
                                 bg-white rounded-full pb-[20px]'>
                                    <img src={subHeder2} alt="" />
                                </div>
                                <div
                                    className='w-[150px] h-[150px]
                                     bg-white rounded-full absolute right-[270px]'>
                                    <img src={subHeder1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Header;