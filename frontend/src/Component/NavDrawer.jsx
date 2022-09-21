import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const NavDrawer = () => {

    return (
        <div className='px-4'>
            <img className='mx-auto mb-5' src={logo} alt="Logo" />
            <div className="grid grid-cols-1 gap-2 text-lg font-bold">
                <Link className='border-b-[1px] pb-3' style={{"color" : "#4d4d4d"}} to='/home'>Home</Link>
                <Link className='border-b-[1px] pb-3' style={{"color" : "#4d4d4d"}} to='/about'>About Us</Link>
                <Link className='border-b-[1px] pb-3' style={{"color" : "#4d4d4d"}} to='/page'>Page</Link>
                <Link className='border-b-[1px] pb-3' style={{"color" : "#4d4d4d"}} to='/shop'>Shop</Link>
                <Link className='border-b-[1px] pb-3' style={{"color" : "#4d4d4d"}} to='/blog'>Blog</Link>
                <Link className='border-b-[1px] pb-3' style={{"color" : "#4d4d4d"}} to='/contact'>Contact Us</Link>
            </div>
        </div>
    );
};

export default NavDrawer;