import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo-light.svg'
import { Drawer } from 'antd';
import { FiUser } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import CartDrawer from './CartDrawer';
import {  BsCart } from 'react-icons/bs';
import {  CgMenuLeft } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"
import {  useDispatch, useSelector } from 'react-redux';
import Authentication from '../../Component/Authentication';
import MobileNavbar from '../MobileNav';
import { getCart } from "../../Redux/actions/carts"

const Navbar = ({modal, setModal}) => {
    const { cartItems } = useSelector(state => state.cart);
    console.log(cartItems)
    const { isAuthenticated } = useSelector(state => state.auth);
    const [open, setOpen] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [drawer, setDrawer] = useState(false);
    const navigate =useNavigate();
    const dispatch = useDispatch()
    
    // navigate home function
    const handleLogo=()=>{
        navigate('/')
        window.location.reload();
    }
    useEffect(()=>{
        dispatch(getCart());
    }, [dispatch])
    return (
        // Navbar Container start
            <div className='bg-[#10b981] top-0 sticky z-10'>
                <div className="px-[25px] max-w-7xl mx-auto ">
                    <div className="flex items-center py-5 gap-6 sm:gap-10 md:gap-20 lg:gap-52 justify-between">

                        {/* Logo  section start*/}
                        <div className="cursor-pointer hidden sm:block">
                            <img className=' w-[150px] md:w-[200px] lg:w-[250px] brand-logo' src={logo} onClick={handleLogo} alt="" />
                        </div>
                        {/* Logo  section end*/}

                        {/* hamburger menu for mobile version option start */}
                        <div className="cursor-pointer sm:hidden" onClick={()=>setDrawer(true)}>
                            <CgMenuLeft size={30} style={{color: "white"}} />
                        </div>
                        {/* hamburger menu mobile version option end */}

                        {/* search bar section start */ }
                        <div className=" flex border search-container">
                            <input
                                onChange={(e) => setKeyword(e.target.value)}
                                className="w-full" type="text" name="search" placeholder="Search Products" id="" />

                            {/* search button navigate search page */}
                            <button className="w-fit" onClick={()=>navigate(`/search/${keyword}`)}><BsSearch size={16} style={{color : "#a0a7b2"}} /></button>       
                        </div>
                        {/* search bar section end */ }

                        {/* cart & user section container start */}
                        <div className='hidden  sm:flex gap-5  items-center right-content'>

                            {/* cart container start */}
                            <div className='relative cursor-pointer'>
                                <BsCart onClick={()=>setOpen(true)} size={22} style={{color: "white"}} />
                                <div className='cart-counter-container'>
                                    <p className="">{ cartItems ? cartItems?.length : 0 }</p>
                                </div>
                            </div>
                            {/* cart container end */}

                            {/* user icon start */}
                            {
                                isAuthenticated
                                ?

                                // if user is login show profile picture of user
                                <div className='cursor-pointer' onClick={()=>navigate('/profile')}>
                                    <HiOutlineUserCircle size={28} style={{color: "white"}} />
                                </div>
                                :
                                // if user isn't login show avatar icon
                                <div className="cursor-pointer">
                                    <FiUser size={24} style={{color: "white"}} onClick={()=>setModal(true)} />
                                </div>
                            }
                            {/* user icon end */}

                        </div>
                        {/* cart & user section container start */}

                    </div>

                    {/* drawer section start */}
                    <Drawer
                        bodyStyle={{"padding": "0px"}}
                        width={350}
                        headerStyle={{"borderBottom": "0px ", "display": "none"}}
                        placement="right" closeIcon={false} open={open}>

                        {/* cart's rest of information */}
                        <CartDrawer setOpen={setOpen}></CartDrawer>
                    </Drawer>
                    {/* drawer section end */}
                    
                    {/* Authentication modal start */}
                    {
                        modal && <Authentication modal={modal} setModal={setModal} />
                    }
                    {/* Authentication modal end */}

                    {/* mobile navbar drawer start */}
                    {
                        drawer && <MobileNavbar setOpen={setOpen} setModal={setModal} drawer={drawer} setDrawer={setDrawer} />
                    }
                    {/* mobile navbar drawer end */}

                </div>
            </div>
        // Navbar Container end
    )
};

export default Navbar;