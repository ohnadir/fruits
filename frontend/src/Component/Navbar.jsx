import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Drawer } from 'antd';
import { GrFormClose } from 'react-icons/gr';
import { BiUser, BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import CartDrawer from './CartDrawer';
import 'rsuite/styles/index.less';
import { BsFillBagFill, BsMinecartLoaded } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import "../Style/Navbar.scss"
import category from "../JSON/category.json"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [keyword, setKeyword] = useState('');
    const navigate =useNavigate()
  
  return (
    <div className='bg-white top-0 sticky z-10'>
        <div className="px-10 max-w-7xl mx-auto ">
            <div className="flex items-center py-3 gap-6 sm:gap-10 md:gap-20 lg:gap-52 justify-between">
                <div className="cursor-pointer hidden sm:block">
                    <img className='' src={logo} onClick={()=>navigate('/')} alt="" />
                </div>
                <div className=" flex border search-container">
                    <div onClick={()=>setDropdown(!dropdown)} className='cursor-pointer gap-5 w-[45%]  lg:w-[28%] relative  category-container'>
                        <p className='m-0 text-[12px]'>Select category</p>
                        {
                            dropdown
                            ? 
                            <BiChevronUp size={16}/>
                            :
                            <BiChevronDown size={16} />
                        }
                        {
                            dropdown
                            &&
                            <div className=' category-dropdown'>
                                <ul>
                                    <li className='active'>Select Category</li>
                                    {
                                        category.map((cat)=> <li>{cat.name}</li>)
                                    }
                                </ul>
                            </div> 
                        }
                        
                    </div>
                    
                    <input
                        onChange={(e) => setKeyword(e.target.value)}
                        className="" type="text" name="search" placeholder="Search Products" id="" />
                    <button className="" onClick={()=>navigate(`/search/${keyword}`)}><BsSearch/></button>       
                </div> 
                <div className='hidden  sm:flex gap-5  items-center right-content'>
                    <div className='relative'>
                        <BsMinecartLoaded onClick={()=>setOpen(true)} size={20} />
                        <p className="cart-content">0</p>
                    </div>
                    <div className="text-xl cursor-pointer border rounded-full p-2">
                        <BiUser onClick={()=>navigate('/profile')} />
                    </div>
                </div>
            </div>
            <Drawer
                bodyStyle={{"padding": "0px"}}
                width={250}
                headerStyle={{"borderBottom": "0px ", "display": "none"}}
                placement="right" closeIcon={false} open={open}>
                
                <div  className=' p-4 flex justify-between bg-[#3d3d3d]'>
                    <div className='flex items-center gap-2  text-[#679509]'>
                        <BsFillBagFill/> <span>3 Item</span>
                    </div>
                    <MdClose
                        style={{color: "white"}}
                        size={18}
                        className='font-bold m-0 cursor-pointer' onClick={()=>setOpen(false)} />
                </div>
                <CartDrawer></CartDrawer>
            </Drawer>
        </div>
    </div>
  )
};

export default Navbar;