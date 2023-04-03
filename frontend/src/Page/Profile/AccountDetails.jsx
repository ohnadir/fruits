import React, { useState } from 'react'
import "../../Style/Profile.scss"
import { useDispatch, useSelector } from 'react-redux'

const AccountDetails = () => {
    const { user } = useSelector(state => state.auth);
    const [Auth, setAuth] = useState("")
    const handleChange=()=>{}
    return (
        <div className='account-details p-3 border mb-10' data-aos="fade-up" >
            <div className='grid grid-cols-1 gap-3 '>
                <h3 className='font-bold text-[18px]'>Account Details</h3>
                <div>
                    <label htmlFor="first name">First Name</label>
                    <input type="text" placeholder='First Name' name='firstName' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="last name">Last Name</label>
                    <input type="text" placeholder='Last Name' name='lastName' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="address ">Address</label>
                    <input type="text" placeholder='Address' name='address' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Address' name='address' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="change password">Change Password</label>
                    <input type="password" placeholder='Change Password' name='change_password' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="address ">Description</label> <br />
                    <textarea rows="4"  name='description' placeholder='Description' onChange={handleChange}  cols=""></textarea>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails