import React, { useEffect, useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { login} from '../Redux/actions/user'
import { useDispatch, useSelector } from 'react-redux';
import {  message } from 'antd';
import { useNavigate } from 'react-router-dom';
import "../Style/Authentication.scss"

const Login = () => {
    const [messageApi, contextHolder ] = message.useMessage();
    const [auth, setAuth] = useState('');
    const [password, setPassword] = useState(false)
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
        },1000)
    }, [messages, isAuthenticated])
    const onSubmit = () => {
        if(!auth.user_name || !auth.password){
            messageApi.error("Input Require")
        }else{
            dispatch(login(auth))
        }
    }
    return (
            <>
            {contextHolder}
            <div className='login'>
                <div className='flex justify-center items-center h-[91.5vh]'>
                    <div className='login-container bg-white'>
                        <div className='py-5'>
                            <div className='mb-8'>
                                <h1 className='text-[30px] font-bold text-center px-10 m-0'>Login</h1>
                                <h3 className='m-0 text-[#6b7280] text-center text-[16px]'>Login with your email and password</h3>
                            </div>
                            <div className='grid grid-cols-1 gap-5 px-10'>
                                <div>
                                    <p className='label-text'>Email</p>
                                    <div className='input-container'> 
                                        <label className='absolute left-3 top-[13px]  z-10' htmlFor="">
                                            <svg stroke="#808080" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </label>
                                        <input onChange={handleChange} inputMode='email' name='email' type="text" placeholder='Email' required />
                                    </div>
                                </div>
                                <div>
                                    <p className='label-text'>Password</p>
                                    <div className='input-container'>
                                        <label htmlFor="">
                                            <svg stroke="#808080" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </svg>
                                        </label>
                                        <input onChange={handleChange} name='password' type={password ? "text" :  "password"} placeholder='Password' required />
                                        {
                                            auth.password
                                            ? 
                                            <span onClick={()=>setPassword(!password)} className='show-password-btn'>
                                                <BsEyeSlash style={{color : "#808080"}} size={15} />
                                            </span> 
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                                <div>
                                    <p className='m-0 underline'> Forgot password</p>
                                </div>
                                <button className='login-btn' onClick={onSubmit}>Login</button>
                            </div>
                            <div className='login-divider'>OR</div>
                            <div className='social-auth px-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                <button className='social-btn'>
                                    <GrFacebookOption size={19} style={{backgroundColor : "transparent"}} />
                                    <span>Login with Facebook</span>
                                </button>
                                <button className='social-btn google-btn'>
                                    <FcGoogle size={19} style={{backgroundColor : "transparent"}} />
                                    <span>Sign in with Google</span>
                                </button>
                                
                            </div>
                            <div className='text-[15px] text-center mt-3'>
                                <span className='text-[#6b7280] '>Not have an account ? <span className='text-black font-bold'>Register</span></span>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </>
    );
};

export default Login;