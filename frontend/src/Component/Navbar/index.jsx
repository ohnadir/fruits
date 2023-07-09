import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo-light.svg'
import { Drawer } from 'antd';
import { FiUser } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import CartDrawer from './CartDrawer';
import {  BsCart } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"
import { useSelector } from 'react-redux';
import Authentication from '../../Component/Authentication';
import { getStoredCart } from '../../utils/LocalStorage';

const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false)
    const [keyword, setKeyword] = useState('');
    const navigate =useNavigate();
    const cart = getStoredCart();
    
    useEffect(()=>{
        setCount(cart?.length);
    },[cart]);

    return (
        <div className='bg-[#10b981] top-0 sticky z-10'>
            <div className="px-10 max-w-7xl mx-auto ">
                <div className="flex items-center py-5 gap-6 sm:gap-10 md:gap-20 lg:gap-52 justify-between">
                    <div className="cursor-pointer hidden sm:block">
                        <img className=' w-[150px] md:w-[200px] lg:w-[250px] brand-logo' src={logo} onClick={()=>navigate('/')} alt="" />
                    </div>
                    <div className=" flex border search-container">
                        <input
                            onChange={(e) => setKeyword(e.target.value)}
                            className="w-full" type="text" name="search" placeholder="Search Products" id="" />
                        <button className="w-fit" onClick={()=>navigate(`/search/${keyword}`)}><BsSearch size={16} style={{color : "#a0a7b2"}} /></button>       
                    </div> 
                    <div className='hidden  sm:flex gap-5  items-center right-content'>
                        <div className='relative cursor-pointer'>
                            <BsCart onClick={()=>setOpen(true)} size={22} style={{color: "white"}} />
                            <div className='cart-counter-container'>
                                <p className="">{count ? count : 0}</p>
                            </div>
                        </div>
                        {
                            isAuthenticated
                            ?
                            <div className='cursor-pointer' onClick={()=>navigate('/profile')}>
                                <HiOutlineUserCircle size={28} style={{color: "white"}} />
                            </div>
                            :
                            <div className="cursor-pointer">
                                <FiUser size={24} style={{color: "white"}} onClick={()=>setModal(true)} />
                            </div>
                        }
                    </div>
                </div>
                <Drawer
                    bodyStyle={{"padding": "0px"}}
                    width={350}
                    headerStyle={{"borderBottom": "0px ", "display": "none"}}
                    placement="right" closeIcon={false} open={open}>
                    <CartDrawer setOpen={setOpen}></CartDrawer>
                </Drawer>
                {
                    modal && <Authentication modal={modal} setModal={setModal} />
                }
            </div>
        </div>
    )
};

export default Navbar;