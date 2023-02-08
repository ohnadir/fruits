import React from 'react';
import "../Style/ProductsWidgets.css"
import photo from "../assets/5.jpg";
import week from "../assets/week.jpg"

export const ProductWidgets = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 my-16'> 
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                <div className='grid grid-cols-1 gap-5'>
                    <div>
                        <p className='m-0 productHeader'>Best Selling</p>
                        <div className='relative'>
                            <div className="firstOverlay"></div>
                            <div className="secondOverlay"></div>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span className=''>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
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
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
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
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                    <div className='productsCard flex items-center justify-between'>
                        <img className='w-[70px]' src={photo} alt="" />
                        <div>
                            <p className='m-0 text-[12px]'>Carrots Group Scal</p>
                            <span>*****</span>
                            <p className='m-0 text-[#679509] font-extrabold'>$200</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div>
                        <p className='m-0 productHeader'>Weekly Discount</p>
                        <div className='relative'>
                            <div className="firstOverlay"></div>
                            <div className="secondOverlay"></div>
                        </div>
                    </div>
                    <div className='h-full relative'>
                        <img className='h-full m-0 p-0' src={week} alt="" />
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