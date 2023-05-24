import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Redux/actions/user'
import {  message } from 'antd';
import { useNavigate } from 'react-router-dom'
import "../Style/Authentication.scss"
import { GrFacebookOption } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { BsEyeSlash } from 'react-icons/bs';

const SignUp = ({setSwitch}) => {
    const [messageApi, contextHolder ] = message.useMessage();
    const [auth, setAuth] = useState('');
    const [password, setPassword] = useState(false)
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
        if(!auth.name || !auth.email || !auth.password){
            messageApi.error("Input Required ")
        }else{
            dispatch(register(auth))
        }
    }
    return (
            <>
                {contextHolder}
                <div className='registration-container'>
                    <div>
                        {/* header section */}
                        <div className='mb-8'>
                            <h1 className='text-[30px] font-bold text-center m-0'>Signing Up</h1>
                            <h3 className='m-0 text-[#6b7280] text-center text-[16px]'>Create an account with email</h3>
                        </div>

                        {/* modal body section */}
                        <div className='grid grid-cols-1 gap-5'>
                            <div>
                                <p className='label-text'>Name</p>
                                <div className='input-container'> 
                                    <label htmlFor="">
                                    <svg stroke="#808080" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    </label>
                                    <input onChange={handleChange}  name='name' type="text" placeholder='Full Name' required />
                                </div>
                            </div>
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
                            <button className='register-btn' onClick={onSubmit}>Register</button>
                        </div>

                        {/* divider */}
                        <div className='registration-divider'>OR</div>
                        <div className='social-auth grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <button className='social-btn'>
                                <GrFacebookOption size={19} style={{backgroundColor : "transparent"}} />
                                <span>Login with Facebook</span>
                            </button>
                            <button className='social-btn google-btn'>
                                <FcGoogle size={19} style={{backgroundColor : "transparent"}} />
                                <span>Sign in with Google</span>
                            </button>
                            
                        </div>

                        {/* modal footer */}
                        <div className='text-[15px] text-center mt-3'>
                            <span className='text-[#6b7280] '>Already have an account ? 
                            <span onClick={()=>setSwitch(false)} className='text-black cursor-pointer font-bold ml-1'> Login</span></span>
                        </div>
                        </div>
                    </div>
            </>
    );
};

export default SignUp;