import React, { useState } from 'react';
import cartHeader from '../assets/breadcrumb.jpg'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import MetaData from '../Component/Layout/MetaData';

const Checkout = () => {
    const [auth, setAuth] = useState('');
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    return (
        <div className='bg-[#f8f8f8] pb-12'>
            <MetaData title={'Checkout'} />
            <div>
                <div className='relative'>
                    <img src={cartHeader} alt="" />
                    <div className=" absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                        <div className='flex gap-8'>
                            <div>
                                <h1 className="text-4xl font-bold text-white">Checkout</h1>
                                <h5 className='flex items-center gap-4 text-2xl text-white'>Home <MdOutlineDoubleArrow className='mt-2' /> Checkout</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto px-2 mt-12 '>
                <div className='bg-white p-4 shadow-lg'>
                    <div className='grid grid-cols-1 gap-6'>
                        <p className='font-bold text-xl mb-0'>Billing Address</p>
                        <hr className='' />
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 '>
                            <div className=''>
                                <label htmlhtmlFor="First Name" className='text-[15px]'>First Name <span className='text-red-500'>*</span></label>
                                <input onChange={handleChange} name="fName" className=' p-2 w-full outline-none border-[1px]' type="text"  />
                            </div>
                            <div>
                                <label htmlhtmlFor="Last Name" className='text-[15px]'>Last Name <span className='text-red-500'>*</span></label>
                                <input onChange={handleChange} name="lName" className=' p-2 w-full outline-none border-[1px]' type="text"  />
                            </div>
                        </div>
                        <div>
                            <label htmlhtmlFor="" className='text-[15px]'>Email <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="email" className=' p-2 w-full outline-none border-[1px]' type="text" />
                        </div>
                        <div>
                            <label htmlhtmlFor="" className='text-[15px]'>Phone <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="phone" className=' p-2 w-full outline-none border-[1px]' type="text" />
                        </div>
                        <div>
                            <label htmlhtmlFor="" className='text-[15px]'>Country <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="country" className=' p-2 w-full outline-none border-[1px]' type="text" />
                        </div>
                        <div>
                            <label htmlhtmlFor="" className='text-[15px]'>Zip <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="zipCode" className=' p-2 w-full outline-none border-[1px]' type="number" />
                        </div>
                        <div className='flex gap-3 items-center'>
                            <input onChange={handleChange} name="anotherAddress" className='' type="checkbox" />
                            <label htmlhtmlFor="" className='text-[15px]'>Ship to a different address?</label>
                        </div>
                        <div>
                            <label htmlhtmlFor="" className='text-[15px]'>Order notes (Optional)</label>
                            <textarea onChange={handleChange} name="message" className=' p-2 w-full outline-none border-[1px]' type="text" />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4 '>
                    <div className='shadow-lg p-4'>
                        <p className='font-bold text-2xl mb-0 pb-4'>Checkout Summary</p>
                        <hr className='pb-6' />
                        <p className='text-[#747e88] flex justify-between text-lg pb-3 border-b-[1px]'>Sub Total <span>$530.00</span></p>
                        <p className='text-[#747e88] flex justify-between text-lg pb-3 border-b-[1px]'>Shipping <span>$530.00</span></p>
                        <p className='text-[#747e88] flex justify-between text-lg pb-3 border-b-[1px]'>Coupon <span>$530.00</span></p>
                        <p className='text-[#747e88] flex justify-between text-lg pb-3 border-b-[1px]'>Total <span>$530.00</span></p>
                        <p className='text-[#666666] flex justify-between font-bold text-lg'>Payable Total<span>$530.00</span></p>
                        
                    </div>
                    <div className='p-4 shadow-lg'>
                        <p className='font-bold text-2xl mb-0 pb-4'>Payment Method</p>
                        <hr className='pb-6' />
                        <div className='grid grid-cols-1 gap-2'>
                            
                            <div className='flex gap-3 items-center'>
                                <input onChange={handleChange} name="cash" className='' value="cashOn" type="checkbox" />
                                <label htmlhtmlFor="" className='text-[15px]'>Cash on delivery</label>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <input onChange={handleChange} name="online" value="online" className='' type="checkbox" />
                                <label htmlhtmlFor="" className='text-[15px]'>Online payments</label>
                            </div>
                            <button className='bg-[#679509] text-white hover:bg-[#2a660a] text-lg px-6 py-2' >Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;