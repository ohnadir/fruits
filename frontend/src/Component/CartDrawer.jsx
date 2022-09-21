import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/hr1.png';
import { Link } from 'react-router-dom'


const CartDrawer = () => {

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center border-b-[1px]'>
                <img className='w-[150px]' src={logo} alt="" />
                <div>
                    <h1 className='text-[16px]'>Simple Product</h1>
                    <h1>$200.00 X 1</h1>
                </div>
                <button><AiOutlineClose className='text-[18px]' /></button>
            </div>
            <div className='mt-5 font-bold text-xl text-[#679509] flex justify-between'>
                <span className=''>Total:-</span> <span>$500</span>
            </div>
            <div className="grid  grid-cols-1 gap-2 text-lg font-bold mt-5">
                <Link to='/cart' style={{"color": "black"}} className='border border-[#679509] py-2 text-center hover:bg-[#2a660a] hover:text-white!'>View Cart</Link>
                <Link to='/checkout' style={{"color": "white"}} className='bg-[#679509] py-2 text-center text-white hover:bg-[#2a660a]'>Processed Checkout</Link>
            </div>
        </div>
    );
};

export default CartDrawer;