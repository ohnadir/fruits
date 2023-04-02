import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import Metadata from '../Component/Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
// import { getProductDetails, clearErrors } from '../../actions/productActions';
import Loader from '../Component/Loader';
import { message, Alert } from 'antd';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../utils/LocalStorage';
import { Rate } from 'antd';
import "../Style/product-details.scss"

const photos = [
    "https://i.ibb.co/jJgD3CF/1.webp",
    "https://i.ibb.co/TTcdMvP/2-2.webp",
    "https://i.ibb.co/B32Btjx/3.webp",
    "https://i.ibb.co/dksqrfX/4.webp"
]
const Product_Details = () => {
    const [selectedImg, setSelectedImg] = useState(photos[0]);
    const [count, setCount] = useState(1);
    const navigate = useNavigate()
    /* const dispatch = useDispatch();
    const { loading, product, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProductDetails());
      }, [dispatch]); */
      const handleSubmit=()=>{
        const data = {
        }
        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        navigate('/checkout')
    }
    const handleCart=()=>{
        addToCart()
    }
    return (
        <>
            {

            }
            <div className='product-details-container'>
                <Metadata title={'Product Details'} />
                <div className='flex p-4 flex-col md:flex-row'>
                    <div className='border w-[50%]'>
                        <img className='border-2  w-[300px] mx-auto' src={selectedImg} alt="" />
                        <div className='flex border'>
                            {
                                photos.map((img, index) => <div
                                    style={{border :selectedImg === img ? "2px solid #679509" : "2px solid transparent" }}
                                    className=''>
                                    <img
                                        className=''
                                        key={index}
                                        src={img}
                                        alt="fruits"
                                        onClick={()=>setSelectedImg(img)}
                                    />

                                </div>)
                            }
                        </div>
                    </div>
                    <div className='px-4 w-[50%]'>
                        <Rate allowHalf defaultValue={2.5} style={{fontSize : "13px", color : "#fc0"}} />
                        <p className='text-[17px] font-bold mb-[6px]'>Vegetables Juices </p>
                        <p className='text-[13px] font-[400] text-[#4d4d4d]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                            elit. Aliquam ac dui sed nunc sagittis maximus. Sed <br />
                            lobortis commodo dapibus. Nunc placerat, massa nec <br />
                            blandit  egestas, eros diam lacinia lectus</p>
                        <div className='flex gap-3'>
                            <p className='text-[#679509] font-extrabold text-3xl m-0'>$200</p> <span className='mt-4 text-lg line-through'>$201</span>
                        </div>
                        <div className='w-full h-[1px] bg-[#eee] mt-3'></div>
                        <div className='my-3 flex items-center gap-3'>
                            <p className='m-0 text- font-extrabold text-[#4d4d4d]'>Categories: </p>
                            <ul className='flex items-center gap-3 text-[12px] m-0 mt-[2px]'>
                                <li >Cover,</li>
                                <li>Seat,</li>
                                <li>Car,</li>
                                <li>Parts</li>
                            </ul>
                        </div>
                        <div className='w-full h-[1px] bg-[#eee]'></div>
                        <div className='flex gap-5 mt-5'>
                            <div className='button-container'>
                                <button disabled={count === 1} onClick={()=>setCount(count - 1)}  >-</button>
                                <input className='outline-0 w-20 px-8' type="text" value={count} />
                                <button onClick={()=>setCount(count + 1)}  >+</button>
                            </div>
                            <button onClick={handleCart} className='cart-btn'> <FaShoppingCart/> Add To Cart</button>
                        </div>
                        <div className='flex gap-3  items-center mt-8 social-container'>
                            <p className='text-[14px] font-bold text-[#4d4d4d]'>Share:</p>
                            
                            <div className='social-button'>
                                <button ><FaFacebookF/></button>
                            </div>
                            <div className='social-button'>
                                <button ><BsTwitter/></button>
                            </div>
                            <div className='social-button'>
                                <button ><FaPinterestP/></button>
                            </div>
                            <div className='social-button'>
                                <button ><FaInstagram/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product_Details