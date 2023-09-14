import React from 'react'
import'./MobileNavbar.scss'
import categories from "../../Category.json"
import { FiHome, FiUser } from "react-icons/fi"
import { HiOutlineUserCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import { Drawer } from 'antd';
import logo from '../../assets/logo-light.svg'
import { useSelector } from 'react-redux'

const MobileNavbar = ({ setModal, drawer, setDrawer, setOpen }) => {
    const { cartItems } = useSelector(state => state.cart);
    const { isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate();

    // category product navigate function
    const handleCategory=(e)=>{
        if(e){
            navigate(`/category/${e}`)
            setDrawer(false)
        }
    }

    // navigate multi-page function
    const handleNavigate=(e)=>{
        if(e === 'home'){
            navigate('/')
        }
        if(e === 'cart'){
            setOpen(true)
        }
        if(e === 'profile'){
            navigate('/profile')
        }
        if(e === 'auth'){
            setModal(true)
        }
        setDrawer(false)
    }
    return (
        <Drawer
            bodyStyle={{"padding": "0px"}}
            width={350}
            headerStyle={{"borderBottom": "0px ", "display": "none"}}
            placement="left" closeIcon={false} open={drawer}>
            <div className='mobile-navbar'>

                {/* drawer brand logo section start */}
                <div className='brand-logo'>
                    <img src={logo} alt="" className="cursor-pointer" onClick={()=>handleNavigate('home')} />
                    <div className='close-icon' onClick={()=>setDrawer(false)}>
                        <svg stroke="none" fill="#ef4444" strokeWidth="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                        </svg>
                    </div>
                </div>
                {/* drawer brand logo section end */}

                {/* all category container section start */}
                <div className="categories">
                    <div className="title">
                        <h1>All Categories</h1>
                    </div>
                    <div className="categories-container">
                        {
                            categories.map((category)=>
                                <ul key={category.id}>
                                    <li onClick={()=>handleCategory(category.name)}>{category.name}</li>
                                </ul>
                            )
                        }
                    </div>
                </div>
                {/* all category container section end */}

                {/* drawer bottom section start */}
                <div className="bottom-nav">

                    {/* home icon start */}
                    <div className="bottom-nav-item" onClick={()=>handleNavigate('home')}>
                        <FiHome size={22} />
                    </div>
                    {/* home icon start */}

                    {/* cart icons for cart drawer open section start */}
                    <div className="bottom-nav-item  relative ">
                        <BsCart onClick={()=>handleNavigate('cart')} size={22} style={{color: "white"}} />
                        <div className='cart-counter-container'>
                            <p className="">{ cartItems ? cartItems?.length : 0 }</p>
                        </div>
                    </div>
                    {/* cart icons for cart drawer open section end */}

                    {/* user part start */}
                    <div className="bottom-nav-item">
                        {
                            isAuthenticated
                            ?
                            // if user is login show profile picture of user
                            <div className='cursor-pointer' onClick={()=>handleNavigate('profile')}>
                                <HiOutlineUserCircle size={28} style={{color: "white"}} />
                            </div>
                            :
                            // if user isn't login show avatar picture
                            <div className="cursor-pointer">
                                <FiUser size={24} style={{color: "white"}} onClick={()=>handleNavigate('auth')} />
                            </div>
                        }
                        {/* user part start */}

                    </div>
                </div>
                {/* drawer bottom section end */}

            </div>
        </Drawer>
        
    )
}

export default MobileNavbar