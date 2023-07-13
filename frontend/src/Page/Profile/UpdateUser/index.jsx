import React, { useEffect, useState } from 'react'
import "./UpdateUser.scss"
import { useDispatch, useSelector } from 'react-redux'
import { update } from "../../../Redux/actions/user"
import { message } from 'antd'

const UpdateUser = () => {
    const [messageApi, contextHolder ] = message.useMessage();
    const { user } = useSelector(state => state.auth);
    const { messages, error  } = useSelector(state => state.update);
    const [auth, setAuth] = useState('');
    const dispatch= useDispatch();
    const handleChange=(e)=>{
        setAuth(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit=()=>{
        if(auth.phone || auth.address){
          dispatch(update(user?._id, auth))
        }
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
            <div className='update-user-container p-3  mb-10' data-aos="fade-up" >
                <h3 className='font-bold text-[18px]'>Update Profile</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Full Name' name='name' onChange={handleChange} />
                    </div>
                    
                    <div>
                        <label htmlFor="address ">Address</label>
                        <input type="text" placeholder='Address' name='address' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" placeholder='Phone Number' name='phone' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input  type="email" placeholder='Email' name='email' onChange={handleChange} />
                    </div>
                </div>
                <div className='update-btn'>
                    <button onClick={handleSubmit}>Update Profile</button>
                </div>
            </div>
        </>
    )
}

export default UpdateUser;