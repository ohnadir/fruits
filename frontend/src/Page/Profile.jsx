import React, { useState } from 'react'
import "../Style/Profile.scss"
import cartHeader from '../assets/breadcrumb.jpg'
import { MdOutlineDashboardCustomize, MdLocationOn, MdOutlineLogout, MdOutlineDoubleArrow } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { RiFileHistoryLine } from 'react-icons/ri';
import AccountDetails from './Profile/AccountDetails';
import Address from './Profile/Address';
import { useDispatch } from "react-redux"
import Order from './Profile/Order';
import Dashboard from './Profile/Dashboard';
import { logout } from "../Redux/actions/user"

const Profile = () => {
    const dispatch = useDispatch()
    const [direction, setDirection] = useState("dashboard")
    if(direction === "logout"){
        dispatch(logout())
    }
    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                    <img src={cartHeader} className='h-[200px] w-full' alt="" />
                    <div className=" absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                        <div className='flex gap-8'>
                            <div>
                                <h1 className="text-2xl font-bold text-white">My account</h1>
                                <h5 className='flex items-center gap-4 text-xl text-white'>Home <MdOutlineDoubleArrow className='' /> My account</h5>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='profile max-w-4xl mx-auto px-10 flex flex-col sm:flex-row justify-between mt-10'>
                <aside className='w-full sm:w-[20%]'>
                    <ul>
                        <li onClick={()=>setDirection("dashboard")} style={{backgroundColor: direction === "dashboard" ? "#679509" : null, color: direction === "dashboard" ? "white" : null}}>Dashboard<MdOutlineDashboardCustomize size={15}/></li>
                        <li onClick={()=>setDirection("order")} style={{backgroundColor: direction === "order" ? "#679509" : null, color: direction === "order" ? "white" : null}}>Orders<RiFileHistoryLine size={15}/></li>
                        <li onClick={()=>setDirection("address")} style={{backgroundColor: direction === "address" ? "#679509" : null, color: direction === "address" ? "white" : null}}>Address<MdLocationOn size={15}/></li>
                        <li onClick={()=>setDirection("account")} style={{backgroundColor: direction === "account" ? "#679509" : null, color: direction === "account" ? "white" : null}}>Account Details<FaUser size={15}/></li>
                        <li onClick={()=>setDirection("logout")} style={{backgroundColor: direction === "logout" ? "#679509" : null, color: direction === "logout" ? "white" : null}}>Logout<MdOutlineLogout size={15}/></li>
                    </ul>
                </aside>
                <main className='w-full sm:w-[75%] mt-5 sm:mt-0'>
                    <div>
                        { direction === "dashboard" && <Dashboard/> }
                        { direction === "account" && <AccountDetails/> }
                        { direction === "address" && <Address/> }
                        { direction === "order" && <Order/> }
                        
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Profile