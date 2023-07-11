import React, { useState } from 'react'
import CSS from './UserDetails.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

const UserDetails = () => {
  const { user } = useSelector(state => state.auth);
  const [avatarPreview, setAvatarPreview] = useState('https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  const [photo, setPhoto] = useState("")
  const [phone, setPhone] = useState(false)
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

  return (
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
            <input type="text" placeholder='Enter your Phone Number' />
            <button>Save</button>
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default UserDetails