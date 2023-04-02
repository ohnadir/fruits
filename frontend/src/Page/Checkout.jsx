import React, { useState } from 'react';
import cartHeader from '../assets/breadcrumb.jpg'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import MetaData from '../Component/Layout/MetaData';
import { Modal } from 'antd';
import "../Style/Checkout.scss"

const Checkout = () => {
    const [auth, setAuth] = useState('');
    const [modal, setModal] = useState(false)
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    const onSubmit = () => {
        if(auth.payment === "online" ){
            setModal(true);
        }
    }
    return (
        <div className='bg-[#f8f8f8] pb-12 checkout-container'>
            <MetaData title={'Checkout'} />
            <div>
                <div className='relative'>
                    <img src={cartHeader} className='h-[250px] w-full' alt="" />
                    <div className=" absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                        <div className='flex gap-8'>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Checkout</h1>
                                <h5 className='flex items-center gap-4 text-xl text-white'>Home <MdOutlineDoubleArrow className='' /> Checkout</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto px-10 mt-12 '>
                <div className='bg-white p-4 shadow-lg'>
                    <div className='grid grid-cols-1 gap-5 address-container'>
                        <p className='card-header'>Billing Details</p>
                        <hr className='' />
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 '>
                            <div className=''>
                                <label htmlhtmlFor="First Name" >First Name <span className='text-red-500'>*</span></label>
                                <input onChange={handleChange} name="fName" type="text"  />
                            </div>
                            <div>
                                <label htmlhtmlFor="Last Name" >Last Name <span className='text-red-500'>*</span></label>
                                <input onChange={handleChange} name="lName"  type="text"  />
                            </div>
                        </div>
                        <div>
                            <label htmlhtmlFor="" >Email <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="email"  type="text" />
                        </div>
                        <div>
                            <label htmlhtmlFor="" >Phone <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="phone"  type="text" />
                        </div>
                        <div>
                            <label htmlhtmlFor="" >Country <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="country"  type="text" />
                        </div>
                        <div>
                            <label htmlhtmlFor="">Zip <span className='text-red-500'>*</span></label>
                            <input onChange={handleChange} name="zipCode"  type="number" />
                        </div>
                        <div className='flex gap-3 items-center'>
                            <input onChange={handleChange} name="anotherAddress" className='' type="checkbox" />
                            <label htmlhtmlFor="" >Ship to a different address?</label>
                        </div>
                        <div>
                            <label htmlhtmlFor="" >Order notes (Optional)</label>
                            <textarea onChange={handleChange} name="message" className=' p-2 w-full outline-none border-[1px]' type="text" />
                        </div>
                    </div>
                </div>
                <div className='gap-5 checkout-summary'>
                    <div className=' summary-container'>
                        <p className='card-header'>Checkout Summary</p>
                        <div className='w-full h-[1px] bg-[#eee] mt-3 mb-5'></div>
                        <p className='active'>Sub Total <span>$530.00</span></p>
                        <p>Shipping <span>$530.00</span></p>
                        <p>Coupon <span>$530.00</span></p>
                        <p>Total <span>$530.00</span></p>
                        <p>Payable Total<span>$530.00</span></p>
                        
                    </div>
                    <div className='payment-container'>
                        <p className='card-header pb-4'>Payment Method</p>
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
                            <button onClick={onSubmit}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Payment options" 
                open={modal}
                footer={null}
                centered 
                onCancel={()=>setModal(false)}>
                    {/* <Payment auth={auth} total={total} setModal={setModal} /> */}
            </Modal>
        </div>
    );
};

export default Checkout;