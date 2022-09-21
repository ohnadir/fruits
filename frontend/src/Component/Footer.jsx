import React from 'react'
import '../Style/Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import Logo from '../assets/logo.png'
import Apple from '../assets/apple.png'
import Google from '../assets/google.png'
 
const Footer=()=>{
    return(
        <div className=' bg-white'>
            <div className='max-w-7xl mx-auto px-2 py-16'>
                <div className='footer-body grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <img src={Logo} alt="" />
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teincididunt ut labore et</p>
                        <div className='flex gap-5'>
                            <FaFacebookF className='social-icon'/>
                            <AiOutlineTwitter className='social-icon'/>
                            <AiOutlineInstagram className='social-icon'/>
                            <FaPinterestP className='social-icon'/>
                        </div>
                    </div>
                    <div>
                        <h1>Product Catalog</h1>
                        <ul>
                            <li>Vegetables</li>
                            <li>Fish & Seafood</li>
                            <li>Health Products</li>
                            <li>Oil & Vinegars</li>
                            <li>Butter & Eggs</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Useful Links</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Featured Products</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                            <li>Promotional Offers</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Download Apps</h1>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing..</p>
                        <div className='flex sm:flex-col gap-6 '>
                            <div>
                                <img src={Apple} alt="" />
                            </div>
                            <div>
                                <img src={Google} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;