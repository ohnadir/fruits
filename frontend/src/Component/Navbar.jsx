import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Drawer, Dropdown, Menu } from 'antd';
import { GrFormClose } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import CartDrawer from './CartDrawer';
import 'rsuite/styles/index.less';
import { BsFillBagFill } from 'react-icons/bs';
import { useNavigate, Link } from "react-router-dom";

const Navbar = (props) => {
    const [open, setOpen] = useState(null);
    const [keyword, setKeyword] = useState('');
    const navigate =useNavigate()
    const menu = (
        <Menu
          items={[
            {
              label: <button onClick={()=>navigate('/profile')}>Profile</button>,
              key: '0',
            },
            {
              label: <button onClick={()=>navigate('/dashboard')}>Dashboard</button>,
              key: '1',
            },
            {
              label: <button onClick={()=>navigate('/login')}>Login</button>,
              key: '3',
            },
          ]}
        />
      );
  
  return (
    <div className='bg-white top-0 sticky z-10 shadow-xl'>
        <div className="px-2 max-w-7xl mx-auto ">
            <div className="flex items-center py-3 gap-6 sm:gap-10 md:gap-20 lg:gap-52 justify-between">
                <div className="cursor-pointer">
                    <img src={logo} onClick={()=>navigate('/home')} alt="" />
                </div>
                <div className=" flex border w-full">
                    <input
                        onChange={(e) => setKeyword(e.target.value)}
                        className="bg-[#f8f8f8] py-3 px-2 outline-0 w-full" type="text" name="search" placeholder="KHOJ, THE SEARCH" id="" />
                    <div className="flex justify-center items-center border-l-[1px] py-3 px-4">
                        <button className="" onClick={()=>navigate(`/search/${keyword}`)}><BsSearch/></button>       
                    </div>
                </div> 
                <div className='flex gap-5  items-center'>
                    <div className='relative'>
                        <label htmlFor="my-drawer-4"
                            onClick={(e) => setOpen(e)}
                            className="drawer-button
                            hover:text-[#669900] 
                            cursor-pointer transition ease-in
                            "><BsFillCartCheckFill className='text-2xl' /></label>
                        <span className="absolute text-white 
                            top-[-12px] left-[13px] bg-[#669900]
                            rounded-full w-[20px] h-[20px]
                            flex items-center hover:text-[#669900] 
                            cursor-pointer transition ease-in 
                            justify-center p-[3px]"
                            
                        >1</span>
                    </div>
                    <div className="text-xl border rounded-full p-2">
                        <Dropdown overlay={menu} overlayStyle={{"marginRight": "10px"}} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()} >
                                <BiUser  className='hover:text-[#669900] 
                                cursor-pointer transition ease-in' />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <Drawer
                bodyStyle={{"padding": "0px"}}
                headerStyle={{"borderBottom": "0px ", "display": "none"}}
                placement="right" closeIcon={false} visible={open}>
                
                <div  className=' p-4 flex justify-between bg-[#3d3d3d]'>
                    <div className='flex items-center gap-2 text-lg text-[#679509]'>
                        <BsFillBagFill/> <span>3 Item</span>
                    </div>
                    <GrFormClose
                        className='font-bold 
                        text-2xl
                        h-[30px]
                        text-white
                        cursor-pointer' onClick={()=>setOpen(false)} />
                </div>
                <CartDrawer></CartDrawer>
            </Drawer>
        </div>
    </div>
  )
};

export default Navbar;