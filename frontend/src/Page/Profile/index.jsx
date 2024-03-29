import React from 'react'
import "./Profile.scss"
import { MdOutlineDashboardCustomize,  MdOutlineLogout } from 'react-icons/md';
import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux"

import { logout } from "../../Redux/actions/user"
import { useNavigate } from "react-router-dom"
import { message } from 'antd';
import { RiHome2Line } from "react-icons/ri"

const Profile = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleLogOut=()=>{
        messageApi.success("Logout Successful")
        dispatch(logout())
    }
    return (
        <>
            {contextHolder}
            <div className='profile-container'>
                <div className='profile'>
                    <aside>
                        <ul>
                            <li onClick={()=>navigate("/profile")} ><RiHome2Line size={15}/>Home</li>
                            {
                                user?.role === "admin"
                                ?
                                <li onClick={()=>navigate("/profile/dashboard")} ><MdOutlineDashboardCustomize size={15}/> Dashboard</li>
                                :
                                null
                            }
                            {
                                user?.role === "user"
                                ?
                                <li onClick={()=>navigate("/profile/order")}>
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="flex-shrink-0 h-[18px] w-[18px]" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 144h288M160 256h288M160 368h288"></path>
                                            <circle cx="80" cy="144" r="16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><circle cx="80" cy="256" r="16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><circle cx="80" cy="368" r="16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                                        </svg>
                                    </span>
                                    <span>My Orders</span>
                                </li>
                                :
                                null
                            }
                            <li onClick={()=>navigate("/profile/update")}>
                                <svg stroke="currentColor" fill="#eee" strokeWidth="0" viewBox="0 0 512 512" className="flex-shrink-0 h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"></path>
                                </svg>
                                <span>Update Profile</span>
                            </li>
                            <li onClick={()=>navigate("/profile/change-pass")}>
                                <span>
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="flex-shrink-0 h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </span>
                                <span>Change Password</span>
                            </li>
                            <li onClick={handleLogOut}><MdOutlineLogout size={15}/>Logout</li>
                        </ul>
                    </aside>
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Profile