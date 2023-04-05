import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { login, clearErrors } from '../Redux/actions/user'
import { useDispatch, useSelector } from 'react-redux';
import {  message } from 'antd';
import Layout from '../Component/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import "../Style/Authentication.scss"

const Login = () => {
    const [messageApi, contextHolder ] = message.useMessage();
    const [auth, setAuth] = useState('');
    const [borderColor, setBorderColor] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, messages } = useSelector(state => state.auth);
    
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
        if(!auth.user_name || !auth.password){
            messageApi.error("Input Require")
        }else{
            dispatch(login(auth))
        }
    }
    return (
        <Layout>
            <>
            {contextHolder}
            <div className='login'>
                <div className='flex justify-center items-center h-[91.5vh]'>
                    <div className='login-container bg-white'>
                        <div className='py-5'>
                            <h1 className='text-lg font-semibold text-center px-10'>Log In To Your Account</h1>
                            <div className='grid grid-cols-1 gap-5 px-10'>
                                <div className='input-container' style={{border: borderColor === "userName" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("userName")}> 
                                    <label htmlFor=""><FaUser /></label>
                                    <input onChange={handleChange} name='user_name' className='' type="text" placeholder='User Name' />
                                </div>
                                <div className='input-container' style={{border: borderColor === "password" ? "1px solid #679509" : null }}  onClick={()=>setBorderColor("password")}>
                                    <label htmlFor=""><FaLock /></label>
                                    <input onChange={handleChange} name='password' className='' type="password" placeholder='Password' />
                                </div>
                                <button onClick={onSubmit}>Login </button>
                            </div>
                        </div>
                        <div className='bg-[#efefef] text-center py-4'>
                            <h1 className='m-0 text-[12px] text-[#4d4d4d]'>Don't have an account? <span className='text-[#0d6efd] cursor-pointer' onClick={()=>navigate("/signup")}>Sign up</span></h1>
                            <h1 className='m-0 text-[12px] text-[#4d4d4d]'>Loss Your Password ! <span className='text-[#0d6efd] cursor-pointer'>Forgot Password?</span> </h1>
                        </div>
                    </div>
                </div> 
            </div>
            </>
        </Layout>
    );
};

export default Login;