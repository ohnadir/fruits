import React from 'react';
import logo from '../assets/hr1.png';
import { useNavigate } from 'react-router-dom'
import { GrFormClose } from 'react-icons/gr';


const CartDrawer = () => {
    const navigate = useNavigate()

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center border-b-[1px]'>
                <div className='flex items-center justify-between'>
                    <img className='w-[80px]' src={logo} alt="" />
                    <div>
                        <h1 className='m-0 text-[13px]'>Simple Product</h1>
                        <h1 className='m-0 text-[12px]'>$200.00 X 1</h1>
                    </div>
                </div>
                <button><GrFormClose size={18} className='font-extrabold' /></button>
            </div>
            <div className='mt-5 font-bold text-[14px] text-[#679509] flex justify-between'>
                <span className=''>Total:-</span> <span>$500</span>
            </div>
            <div className="grid  grid-cols-1 gap-4 text-lg font-bold mt-5 cart-drawer-button">
                <button onClick={()=>navigate('/cart')} className='active'>View cart</button>
                <button onClick={()=>navigate('/checkout')}>Process Checkout</button>
            </div>
        </div>
    );
};

export default CartDrawer;