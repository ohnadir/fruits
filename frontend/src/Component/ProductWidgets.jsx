import React from 'react';
import "../Style/ProductsWidgets.scss"
import photo from "../assets/5.jpg";
import week from "../assets/week.jpg"
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProductWidgets = () => {
    return (
        <div className='max-w-5xl mx-auto px-5 my-16 product-widget'> 
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>
                <div className='grid grid-cols-1 gap-5'>
                    <div>
                        <p className='m-0 productHeader'>Best Selling</p>
                        <div className='relative'>
                            <div className="firstOverlay"></div>
                            <div className="secondOverlay"></div>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[10px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div>
                        <p className='m-0 productHeader'>Sale Products</p>
                        <div className='relative'>
                            <div className="firstOverlay"></div>
                            <div className="secondOverlay"></div>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div>
                        <p className='m-0 productHeader'>Latest Products</p>
                        <div className='relative'>
                            <div className="firstOverlay"></div>
                            <div className="secondOverlay"></div>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[100px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[11px]'>Carrots Group Scal</p>
                            <p className='m-0 text-[10px]'>
                                <Rating
                                    initialRating={3.5}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </p>
                            <p className='m-0 text-[#679509] text-[11px] font-extrabold'>$200</p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:grid grid-cols-1 gap-5'>
                    <div>
                        <p className='m-0 productHeader'>Weekly Discount</p>
                        <div className='relative'>
                            <div className="firstOverlay"></div>
                            <div className="secondOverlay"></div>
                        </div>
                    </div>
                    <div className=' relative'>
                        <img className='banner-img' src={week} alt="" />
                        <div className='absolute top-[30%] left-0 text-center mx-auto'>
                            <p className='m-0 text-white font-extrabold text-2xl'>Get A Discount For Weekly Offer!</p>
                            <button className='shopBtn'>Shop Now</button>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}