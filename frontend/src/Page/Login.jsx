import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';
import { login, clearErrors } from '../Redux/actions/user'
import { useDispatch, useSelector } from 'react-redux';
import {  message } from 'antd';
import Layout from '../Component/Layout/Layout';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [auth, setAuth] = useState('');
    const { email, password } = auth;
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const { isAuthenticated, user, error, loading  } = useSelector(state => state.auth);
    
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    const success = () => {
        message.success(user.message);
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
        
        dispatch(login(email, password))
            
    }
    return (
        <Layout>
            <div className=''>
                <div className='flex justify-center items-center h-[91.5vh]'>
                    <div>
                        <div className='border shadow-xl bg-white py-6'>
                            <h1 className='text-2xl font-semibold px-10'>Log In To Your Account</h1>
                            <div className='grid grid-cols-1 gap-5 px-10'>
                                <div className='flex items-center border'>
                                    <div className='p-3 border-r'>
                                        <AiOutlineUser className='text-[#679509] text-xl'/>
                                    </div>
                                    <input onChange={handleChange} name='email' className='py-3 px-3 w-full outline-none' type="text" placeholder='Email' />
                                </div>
                                <div className='flex justify-between items-center border '>
                                    <div className='p-3 border-r'>
                                        <FaLock className='text-[#679509] text-xl'/>
                                    </div>
                                    <input onChange={handleChange} name='password' className='py-3 px-3 w-full outline-none' type="text" placeholder='Password' />
                                </div>
                                <div>
                                    <button onClick={onSubmit} className='bg-[#679509] text-lg py-3 rounded-full text-white w-full'>Login </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#efefef] text-center py-4'>
                            <h1>Don't have an account? <Link to='/signup'>Sign In</Link></h1>
                            <h1>Loss Your Password ! <span className='text-[#0d6efd]'>Forgot Password?</span> </h1>
                        </div>
                    </div>
                </div> 
            </div>
        </Layout>
    );
};

export default Login;