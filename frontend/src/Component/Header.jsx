import React from 'react';
import hero from "../assets/hero1.png"
import "../Style/Deal.css"
const Header = () => {
    return (
        <div className='HeaderContainer overflow-hidden'>
            <div className='max-w-7xl mx-auto  mb-16 px-10 py-16'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between'>
                    <div className='mt-10 md:mt-0'>
                        <h5 data-aos="fade-up" data-aos-delay="100" className="text-lg sm:text-xl md:text-xl m-0">Organic and fresh food</h5>
                        <h1 data-aos="fade-up" data-aos-delay="300" className='text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold py-2'>Get freshness delivered <br /> on your doorstep.</h1>
                        <div data-aos="fade-up" data-aos-delay="500" className='flex gap-10 '>
                            <button className='bg-[rgb(103,149,9)] px-5 py-[5px]  lg:px-8 lg:py-3 text-white lg:font-bold'>Shop Now</button>
                            <button className='bg-white px-5  lg:px-6  text-black lg:font-bold '>Category</button>
                        </div>
                    </div>
                    <div className=''>
                        <div className='relative'>
                            <img data-aos="fade-left" data-aos-delay="300" className='' src={hero} alt="" />
                            <div className='headerOverlay' data-aos="fade-left" >
                                <div className='headerOverlayContainer' >
                                    <p className='m-0'>45%</p>
                                    <p className='m-0'>Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;