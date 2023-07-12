import React, { useEffect, useState } from 'react'
import CSS from './UserDetails.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { putUserInfo } from "../../../Redux/actions/user"
import { message } from 'antd';

const UserDetails = () => {
  const [messageApi, contextHolder ] = message.useMessage();
  const { user } = useSelector(state => state.auth);
  const { messages, error  } = useSelector(state => state.update);
  const [avatarPreview, setAvatarPreview] = useState('https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  const [photo, setPhoto] = useState("")
  const [phone, setPhone] = useState(false)
  const [auth, setAuth] = useState('');
  const [address, setAddress] = useState(false)
  const dispatch= useDispatch()
  const handleChange=(e)=>{
    setAuth(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const changeImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result)
        setPhoto(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  const handleSubmit=()=>{
    if(auth.phone || auth.address){
      dispatch(putUserInfo(user?._id, auth))
    }
    
  }
  
  useEffect(()=>{
    if(messages){
      messageApi.success(messages)
    }
    if(error){
      messageApi.error(error)
    }
    setTimeout( ()=>{
      if(messages){
        setAddress(false)
        setPhone(false)
      }
    },2000)
  }, [messages, error])
  return (
    <>
      {contextHolder}
      <div className={CSS.user_details_container}>
        <div className='w-[10%]'>
          <div className={CSS.avatar}>
            <img src={avatarPreview} alt="" />
            <div className={CSS.upload}>
              <div className='flex flex-col items-center justify-center'>
                <MdOutlineAddPhotoAlternate size={18} className="text-white"/>
                <p  className="text-white text-[12px]">Change Images</p>
              </div>
              <input onChange={changeImage} type="file"></input>
            </div>
          </div>
        </div>
        <div className={CSS.user_info}>
          <div className={CSS.info_item}>
            <label htmlFor="">Full Name</label>
            <p>{user?.name}</p>
          </div>

          <div className={CSS.info_item}>
            <label htmlFor="">Email</label>
            <p>{user?.email} </p>
          </div>

          <div className={CSS.info_item}>
            <label htmlFor="">Phone Number</label>
            <p>{user?.phone ? user?.phone : "Phone Number Not Found" } <span className='cursor-pointer font-semibold text-black' onClick={()=>setPhone(!phone)}>{user?.phone ? null : "Add" }</span></p>
          </div>
          {
            phone
            ?
            <div className={CSS.info_item}>
              <label htmlFor="">Add Phone Number</label>
              <input type="text" name='phone' onChange={handleChange} placeholder='Enter your Phone Number' />
              <button disabled={!auth.phone} onClick={handleSubmit}>Save</button>
            </div>
            : null
          }
          <div className={CSS.info_item}>
            <label htmlFor="">Address</label>
            <p>{user?.address ? user?.address : "Address Not Found" } <span className='cursor-pointer font-semibold text-black' onClick={()=>setAddress(!phone)}>{user?.address ? null : "Add" }</span></p>
          </div>

          {
            address
            ?
            <div className={CSS.info_item}>
              <label htmlFor="">Add Address</label>
              <input type="text" name='address' onChange={handleChange} placeholder='Enter your Full address' />
              <button disabled={!auth.address} onClick={handleSubmit}>Save</button>
            </div>
            : null
          }
        </div>
      </div>
    </>
  )
}

export default UserDetails