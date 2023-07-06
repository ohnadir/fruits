import React, { useState } from 'react';
import "../Style/Header.scss"
import Slider from "react-slick";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Header = () => {
    const [copy, setCopy] = useState("")
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='slider-container'>
                    <div className='slider'>
                        <Slider {...settings}>
                            <div className='slider-item'>
                                <img src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1684986067/slider-1_yobsp0.webp" alt="" />
                                <div className='slider-content'>
                                    <h1 data-aos="fade-up" data-aos-delay="300" className='slider-slogan mb-1 text-xl sm:text-lg md:text-2xl  lg:text-3xl font-bold text-gray-800'>The Best Quality Products Guaranteed</h1>
                                    <h5 data-aos="fade-up" data-aos-delay="100" className="slider-text text-gray-600 text-base leading-6">Dramatically facility effective total linkage for go forward processes.</h5>
                                    <div data-aos="fade-up" data-aos-delay="500" className='flex gap-10 '>
                                        <button className='shop-btn '>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='slider-item'>
                                <img src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1684989918/slider-2_nd9yl9.webp" alt="" />
                                <div className='slider-content'>
                                    <h1 data-aos="fade-up" data-aos-delay="300" className='slider-slogan mb-1 text-xl sm:text-lg md:text-2xl  lg:text-3xl font-bold text-gray-800'>Best Different Type of Grocery Store</h1>
                                    <h5 data-aos="fade-up" data-aos-delay="100" className="slider-text text-gray-600 text-base leading-6">Quickly aggregate empowered networks after emerging products</h5>
                                    <div data-aos="fade-up" data-aos-delay="500" className='flex gap-10 '>
                                        <button className='shop-btn '>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='slider-item'>
                                <img src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1684989969/slider-3_qj0nwr.webp" alt="" />
                                <div className='slider-content'>
                                    <h1 data-aos="fade-up" data-aos-delay="300" className='slider-slogan mb-1 text-xl sm:text-lg md:text-2xl  lg:text-3xl font-bold text-gray-800'>Quality Freshness Guaranteed</h1>
                                    <h5 data-aos="fade-up" data-aos-delay="100" className="slider-text text-gray-600 text-base leading-6">Intrinsically fashion performance based products rather after than accurate benefit.</h5>
                                    <div data-aos="fade-up" data-aos-delay="500" className='flex gap-10 '>
                                        <button className='shop-btn '>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="side-header border rounded-[8px]">
                        <p className="heading">Latest Super Discount Active Coupon Code</p>
                        <div className='flex flex-col justify-between max-h-[87%] bg-[#eee]'>
                            <div className='coupon-item flex border justify-between items-center gap-5'>
                                <div className='flex gap-5 items-center'>
                                    <img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75" alt="" />
                                    <div className='coupon'>
                                        <span>10%</span>
                                        <span>Off</span>
                                        <p className='p-0 m-0'>SUMMER23</p>
                                        <div className='timer'>
                                            <div className='timer-item'>00</div>
                                            <div className='timer-colon'>:</div>
                                            <div className='timer-item'>00</div>
                                            <div className='timer-colon'>:</div>
                                            <div className='timer-item'>00</div>
                                            <div className='timer-colon'>:</div>
                                            <div className='timer-item'>00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='clipboard-container'>
                                    <CopyToClipboard text="SUMMER23">
                                        {
                                            copy === "SUMMER23"
                                            ?
                                            <p className='p-0 m-0 clipboard'>Copied!</p>
                                            :
                                            <p onClick={()=>setCopy("SUMMER23")} className='p-0 m-0 clipboard'>SUMMER23</p>
                                        }
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <div className='coupon-item flex border justify-between items-center gap-5'>
                                <div className='flex gap-5 items-center'>
                                    <img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75" alt="" />
                                    <div className='coupon'>
                                        <span>10%</span>
                                        <span>Off</span>
                                        <p className='p-0 m-0'>SUMMER23</p>
                                        <div className='timer'>
                                            <div className='timer-item'>00</div>
                                            <div className='timer-colon'>:</div>
                                            <div className='timer-item'>00</div>
                                            <div className='timer-colon'>:</div>
                                            <div className='timer-item'>00</div>
                                            <div className='timer-colon'>:</div>
                                            <div className='timer-item'>00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='clipboard-container'>
                                    <CopyToClipboard text="SUMMER23GIFT">
                                        {
                                            copy === "SUMMER23GIFT"
                                            ?
                                            <p className='p-0 m-0 clipboard'>Copied!</p>
                                            :
                                            <p onClick={()=>setCopy("SUMMER23GIFT")} className='p-0 m-0 clipboard'>SUMMER23</p>
                                        }
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='discount-cart'>
                    <div className='discount-container '>
                        <div>
                            <h1>
                                <span className='text-emerald-600 font-bold'>100% Natural quality </span>
                                <span className='text-black'>Organic Product</span>
                            </h1>
                            <p>
                                See our latest discounted products from here and get a special
                                <span className='text-emerald-600'> discount product</span>
                            </p>
                        </div>
                        <div>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;