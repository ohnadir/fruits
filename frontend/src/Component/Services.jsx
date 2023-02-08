import React from 'react'
import { RiShieldKeyholeLine } from 'react-icons/ri';
import { FaDollarSign } from 'react-icons/fa';
import { TbLeaf, TbTruckDelivery } from 'react-icons/tb';

const Services = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 my-16  py-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-white p-5'>
                <div className='flex items-center gap-3 '>
                    <TbTruckDelivery className='serviceIcon h-[40px] w-[40px] md:w-[50px] lg:w-[40px] p-[6px]  bg-[#d9d9d9] rounded-full ' />
                    <div>
                        <p className='m-0 text-[14px] font-semibold'>Free Shipping</p>
                        <p className='m-0 text-[11px]'>Free UK shipping when you spend e30</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <TbLeaf className='serviceIcon  h-[40px] w-[40px] md:w-[50px] lg:w-[40px] p-[6px]  bg-[#d9d9d9] rounded-full ' />
                    <div>
                        <p className='m-0 text-[14px] font-semibold'>Get Fresh Products</p>
                        <p className='m-0 text-[11px]'>Find a range of best online organic food.</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <FaDollarSign className='serviceIcon  h-[40px] w-[40px] md:w-[50px] lg:w-[40px] p-[6px]  bg-[#d9d9d9] rounded-full ' />
                    <div>
                        <p className='m-0 text-[14px] font-semibold'>Moneyback Offer</p>
                        <p className='m-0 text-[11px]'>Free UK shipping when you spend £30.</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <RiShieldKeyholeLine className='serviceIcon  h-[40px] w-[40px] md:w-[50px] lg:w-[40px] p-[6px]  bg-[#d9d9d9] rounded-full ' />
                    <div>
                        <p className='m-0 text-[14px] font-semibold'>Safe Payment</p>
                        <p className='m-0 text-[11px]'>We are using secure payment methods.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services