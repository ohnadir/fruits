import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ChangePassword.scss'

const ChangePassword = () => {
    const { user } = useSelector(state => state.auth);
    
    const handleChange=()=>{}
    return (
        <div data-aos="fade-up" className='address-container p-4'>
            <h1>Change Password</h1>
            <div className='grid grid-cols-1 gap-3 '>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Current Password</label>
                    <input type="password" placeholder='Your Current Password' name='current-address' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="change password">New Password</label>
                    <input type="password" placeholder='Your New Password' name='change-password' onChange={handleChange} />
                </div>
            </div>
            <div className='update-btn'>
                <button>Change Password</button>
            </div>
        </div>
    )
}

export default ChangePassword