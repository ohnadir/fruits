import React, { useEffect, useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearErrors } from '../Redux/actions/user'
import {  message } from 'antd';
import { useNavigate } from 'react-router-dom'
import Layout from '../Component/Layout/Layout';
import "../Style/Authentication.scss"

const Signup = () => {
    const [messageApi, contextHolder ] = message.useMessage();
    const [auth, setAuth] = useState('');
    const [borderColor, setBorderColor] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, messages  } = useSelector(state => state.auth);
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    useEffect(() => {
        if (messages) {
            messageApi.info(messages);
        }
        setTimeout( ()=>{
            if(isAuthenticated === true){
                navigate('/')
            }
        },2000)
    }, [messages, isAuthenticated])
    const onSubmit = () => {
        if(auth.password !== auth.confirm_pass){
            messageApi.error("Password Doesn't match")
        }else{
            dispatch(register(auth))
        }
    }
    return (
        <Layout>
            <>
            {contextHolder}
            <div className='registration '>
                <div className='flex justify-center items-center h-[92vh]'>
                    <div className='registration-container '>
                        <div className=' bg-white p-5'>
                            <h1 className='text-[16px] font-semibold text-center'>Create Your Account</h1>
                            <div className='grid grid-cols-1 gap-5'>
                                <div style={{border: borderColor === "userName" ? "1px solid #679509" : null }} className='input-container' onClick={()=>setBorderColor("userName")}>
                                    <label htmlFor=""><FaUser /></label>
                                    <input onChange={handleChange} name='user_name' className='' type="text" placeholder='User Name' />
                                </div>
                                <div style={{border: borderColor === "email" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("email")} className='input-container'>
                                    <label htmlFor=""><MdEmail /></label>
                                    <input onChange={handleChange} name='email' className='' type="email" placeholder='Email Address' />
                                </div>
                                <div className='input-container' style={{border: borderColor === "password" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("password")}>
                                    <label htmlFor=""><FaLock  /></label>
                                    <input onChange={handleChange}  name='password' type="password" placeholder='Password' />
                                </div>
                                <div className='input-container' style={{border: borderColor === "confirm-pass" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("confirm-pass")}>
                                    <label htmlFor=""><FaLock /></label>
                                    <input onChange={handleChange} type="password" name='confirm_pass'  placeholder='Confirm Password' />
                                </div>
                                <button onClick={onSubmit}>Create Account</button>
                            </div>
                        </div>
                        <div className='bg-[#efefef] p-4 text-center'>
                            <h1 className='m-0 text-[12px] text-[#4d4d4d]'>Already have an account? <span className='text-[#0d6efd] cursor-pointer' onClick={()=>navigate("/login")}>Login</span></h1>
                        </div>
                    </div>
                </div> 
            </div>
            </>
        </Layout>
    );
};

export default Signup;