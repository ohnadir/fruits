import React, { useEffect, useState } from 'react';
import { HiUser } from 'react-icons/hi';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearErrors } from '../actions/userActions'
import {  message } from 'antd';
import { Link } from 'react-router-dom'
import Layout from '../Component/Layout/Layout';

const Signup = (props) => {
    const [auth, setAuth] = useState('');
    const userData = {
        firstName:auth.firstName,
        lastName:auth.lastName,
        password:auth.password,
        email:auth.email,
        phone:auth.phone
    }
    const dispatch = useDispatch();
    const { isAuthenticated, user, error, loading  } = useSelector(state => state.auth);
    console.log(error)
    console.log(user)
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    const success = () => {
        message.success(user?.message);
      };
      
    const errors = () => {
        message.error(error);
    };

    useEffect(() => {
        
        if (isAuthenticated) {
            success()
        }

        if (error) {
            errors()
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, error])
    const onSubmit = () => {
        console.log(auth)
        dispatch(register(userData))
            
    }
    return (
        <Layout>
        <div className='bg-[#f8f8f8]'>
            <div className='flex justify-center items-center h-[92vh]'>
                <div>
                    <div className=' bg-white p-5'>
                        <h1 className='text-4xl font-semibold'>Create Your Account</h1>
                        <div className='grid grid-cols-1 gap-5'>
                            <div className='flex items-center border'>
                                <div className='py-2 px-3 border-r'>
                                    <HiUser className='text-[#679509] text-xl' />
                                </div>
                                <input onChange={handleChange} name='firstName' className='py-3 px-3 w-full outline-none' type="text" placeholder='First Name' />
                            </div>
                            <div className='flex items-center border'>
                                <div className='py-2 px-3 border-r'>
                                    <HiUser className='text-[#679509] text-xl' />
                                </div>
                                <input onChange={handleChange} name='lastName' className='py-3 px-3 w-full outline-none' type="text" placeholder='Last Name' />
                            </div>
                            <div className='flex items-center border'>
                                <div className='py-2 px-3 border-r'>
                                    <MdEmail className='text-[#679509] text-xl' />
                                </div>
                                <input onChange={handleChange} name='email' className='py-3 px-3 w-full outline-none' type="text" placeholder='Email Address' />
                            </div>
                            <div className='flex items-center border'>
                                <div className='py-2 px-3 border-r'>
                                    <FaLock className='text-[#679509] text-xl' />
                                </div>
                                <input onChange={handleChange} name='password' className='py-3 px-3 w-full outline-none' type="text" placeholder='Password' />
                            </div>
                            <div className='flex items-center border'>
                                <div className='py-2 px-3 border-r'>
                                    <FaLock className='text-[#679509] text-xl' />
                                </div>
                                <input onChange={handleChange} type="number" name='phone' className='py-3 px-3 w-full outline-none' placeholder='Phone Number' />
                            </div>
                            <div className='flex'>
                                <button onClick={onSubmit} className='bg-[#679509] text-lg py-3 rounded-full text-white w-full'>Create Account</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#efefef] p-4 text-center'>
                        <h1>Already have an account? <Link to='/login'>Log In</Link></h1>
                    </div>
                </div>
            </div> 
        </div>
        </Layout>
    );
};

export default Signup;