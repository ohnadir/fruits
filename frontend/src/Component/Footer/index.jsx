import React, { useState } from 'react'
import './Footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import {message} from "antd"
 
const Footer=()=>{
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const [messageApi, contextHolder ] = message.useMessage();

    // check valid email or not 
    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }; 

    const handleSubmit=()=>{
        const result = validateEmail(email)
        if(!email){
            messageApi.error("Please input valid to Subscribe")
        }
        if(result){
            messageApi.success("Congratulation Your email is register")
            setValid(true);
        }
    }
    return(
        <>
            {contextHolder}
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-body'>
                        <div className='mx-auto w-fit'>
                            <img className='mb-1' src="https://kachabazar-store.vercel.app/logo/logo-color.svg" alt="" />
                            <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teincididunt ut labore et</p>
                            <div className='flex gap-5'>
                                <div className='social-icon'>
                                    <FaFacebookF size={18} />
                                </div>
                                <div className='social-icon'>
                                    <AiOutlineTwitter size={18}/>
                                </div>
                                <div className='social-icon'>
                                    <AiOutlineInstagram size={18}/>
                                </div>
                                <div className='social-icon'>
                                    <FaPinterestP size={18}/>
                                </div>
                            </div>
                        </div>
                        <div className='sm:mx-auto w-fit'>
                            <h1>About Us</h1>
                            <ul>
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>About team</li>
                            </ul>
                        </div>
                        <div className='sm:mx-auto w-fit'>
                            <h1>Subscribe Now</h1>
                            <p className='text-[14px]'>Subscribe your email for newsletter and featured news based on your interest.</p>
                            <div className='input-container'>
                                <span className='message-icon'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 2xl:w-[18px] h-4 2xl:h-[18px]">
                                        <g clip-path="url(#clip0)">
                                            <path d="M16.3125 2.25H1.68751C0.75696 2.25 0 3.00696 0 3.93751V14.0625C0 14.9931 0.75696 15.75 1.68751 15.75H16.3125C17.243 15.75 18 14.9931 18 14.0625V3.93751C18 3.00696 17.243 2.25 16.3125 2.25ZM16.3125 3.375C16.3889 3.375 16.4616 3.39085 16.5281 3.41854L9 9.94319L1.47188 3.41854C1.53834 3.39089 1.61105 3.375 1.68747 3.375H16.3125ZM16.3125 14.625H1.68751C1.37715 14.625 1.125 14.3729 1.125 14.0625V4.60711L8.6314 11.1127C8.73743 11.2044 8.86872 11.25 9 11.25C9.13128 11.25 9.26256 11.2044 9.3686 11.1127L16.875 4.60711V14.0625C16.875 14.3729 16.6228 14.625 16.3125 14.625Z" fill="#B3B3B3"></path>
                                        </g>
                                    </svg>
                                </span>
                                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Write your email here' />
                                <button disabled={valid === true} onClick={handleSubmit}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] 2xl:w-5 h-[18px] 2xl:h-5 false">
                                        <g clip-path="url(#clip0)">
                                            <path d="M18.809 8.21633L2.67252 1.52062C1.99272 1.23851 1.22471 1.36262 0.668264 1.84434C0.111818 2.32613 -0.120916 3.06848 0.0609589 3.78164L1.49725 9.41414H8.52951C8.85311 9.41414 9.11549 9.67648 9.11549 10.0001C9.11549 10.3237 8.85315 10.5861 8.52951 10.5861H1.49725L0.0609589 16.2186C-0.120916 16.9318 0.111779 17.6741 0.668264 18.1559C1.22584 18.6386 1.99393 18.7611 2.67256 18.4796L18.809 11.7839C19.5437 11.4791 20.0001 10.7955 20.0001 10.0001C20.0001 9.20469 19.5437 8.52113 18.809 8.21633Z" fill="#02B290"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="20" height="20" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;