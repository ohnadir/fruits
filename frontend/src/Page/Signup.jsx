import React, { useEffect, useState } from 'react';
import { HiUser } from 'react-icons/hi';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearErrors } from '../Redux/actions/user'
import {  message } from 'antd';
import { useNavigate } from 'react-router-dom'
import Layout from '../Component/Layout/Layout';
import "../Style/Authentication.scss"

const Signup = (props) => {
    const [auth, setAuth] = useState('');
    const [borderColor, setBorderColor] = useState("")
    const userData = {
        firstName:auth.firstName,
        lastName:auth.lastName,
        password:auth.password,
        email:auth.email,
        phone:auth.phone
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, error, loading  } = useSelector(state => state.auth);
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
        dispatch(register(userData))
            
    }
    function changeBorder(boxId){
        document.getElementById(boxId).style.border = "1px solid #679509";
    }
    return (
        <Layout>
            <div className='registration '>
                <div className='flex justify-center items-center h-[92vh]'>
                    <div className='registration-container '>
                        <div className='  p-5'>
                            <h1 className='text-[16px] font-semibold text-center'>Create Your Account</h1>
                            <div className='grid grid-cols-1 gap-5'>
                                <div style={{border: borderColor === "userName" ? "1px solid #679509" : null }} className='input-container' onClick={()=>setBorderColor("userName")}>
                                    <label htmlFor=""><FaUser /></label>
                                    <input onChange={handleChange} name='user-name' className='' type="text" placeholder='UserName' />
                                </div>
                                <div style={{border: borderColor === "email" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("email")} className='input-container'>
                                    <label htmlFor=""><MdEmail /></label>
                                    <input onChange={handleChange} name='email' className='' type="email" placeholder='Email Address' />
                                </div>
                                <div className='input-container' style={{border: borderColor === "password" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("password")}>
                                    <label htmlFor=""><FaLock  /></label>
                                    <input onChange={handleChange}  name='password' type="text" placeholder='Password' />
                                </div>
                                <div className='input-container' style={{border: borderColor === "confirm-pass" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("confirm-pass")}>
                                    <label htmlFor=""><FaLock /></label>
                                    <input onChange={handleChange} type="password" name='confirm-pass'  placeholder='Phone Number' />
                                </div>
                                <button onClick={onSubmit}>Create Account</button>
                            </div>
                        </div>
                        <div className='bg-[#efefef] p-4 text-center'>
                            <h1 className='m-0 text-[12px] text-[#4d4d4d]'>Already have an account? <span className='text-[#0d6efd] cursor-pointer' onClick={()=>navigate("signup")}>Sign up</span></h1>
                        </div>
                    </div>
                </div> 
            </div>
        </Layout>
    );
};

export default Signup;