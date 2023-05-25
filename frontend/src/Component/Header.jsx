import React from 'react';
import "../Style/Header.scss"
import Slider from "react-slick";
const Header = () => {
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
                        <p className="loram">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis laboriosam alias possimus facere pariatur laborum cum eveniet ratione magni hic similique, iure ad, accusantium maiores mollitia sapiente quisquam! Recusandae.
                        </p>
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