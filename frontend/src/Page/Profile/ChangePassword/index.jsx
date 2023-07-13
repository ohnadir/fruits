import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ChangePassword.scss'
import { message } from 'antd';
import { changePassword } from "../../../Redux/actions/user"

const ChangePassword = () => {
    const [messageApi, contextHolder ] = message.useMessage();
    const { user } = useSelector(state => state.auth);
    const { messages, error  } = useSelector(state => state.update);
    const [auth, setAuth] = useState('');
    const dispatch= useDispatch();
    const handleChange=(e)=>{
        setAuth(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit=()=>{
        dispatch(changePassword(user?._id, auth))
    }
      
    useEffect(()=>{
        if(messages){
          messageApi.success(messages)
        }
        if(error){
          messageApi.error(error)
        }
    }, [messages, error])
    return (
        <>
            {contextHolder}
            <div data-aos="fade-up" className='change-password-container p-4'>
                <h1>Change Password</h1>
                <div className='grid grid-cols-1 gap-3 mt-3'>
                    <div>
                        <label htmlFor="password">Current Password</label>
                        <input type="password" placeholder='Your Current Password' name='password' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="change password">New Password</label>
                        <input type="password" placeholder='Your New Password' name='newPassword' onChange={handleChange} />
                    </div>
                </div>
                <div className='update-btn'>
                    <button onClick={handleSubmit}>Change Password</button>
                </div>
            </div>
        </>
    )
}

export default ChangePassword