import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import Metadata from './Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../actions/productActions';
import Loader from './Loader';
import { message, Alert } from 'antd';

const photos = [
    "https://i.ibb.co/jJgD3CF/1.webp",
    "https://i.ibb.co/TTcdMvP/2-2.webp",
    "https://i.ibb.co/B32Btjx/3.webp",
    "https://i.ibb.co/dksqrfX/4.webp"
]

const ProductDetails = () => {
    const [selectedImg, setSelectedImg] = useState(photos[0]);
    const [count, setCount] = useState(1)
    const dispatch = useDispatch();
    const { loading, product, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProductDetails());
      }, [dispatch]);
    return (
        <>
        {
            loading
                ?
                <Loader></Loader>
                :
                (
                <div>
                    <Metadata title={'Product Details'} />
                    <div className='flex p-4 flex-col md:flex-row'>
                        <div className='border'>
                            <img className='border-2  w-[450px]' src={selectedImg} alt="" />
                            <div className='flex border'>
                                {
                                    photos.map((img, index) => <div
                                        style={{border :selectedImg === img ? "2px solid #679509" : "" }}
                                        className=''>
                                        <img
                                            className=' w-[106px]'
                                            key={index}
                                            src={img}
                                            alt="fruits"
                                            onClick={()=>setSelectedImg(img)}
                                        />
                                            
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className='p-4'>
                            <Rating
                                initialRating={3.5}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                readonly
                            ></Rating>

                            <p className='text-lg font-bold'>Vegetables Juices </p>
                            <p className='text-xl text-[#4d4d4d]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit. Aliquam ac dui sed nunc sagittis maximus. Sed <br />
                                lobortis commodo dapibus. Nunc placerat, massa nec <br />
                                blandit  egestas, eros diam lacinia lectus</p>
                            <div className='flex gap-3'>
                                <p className='text-[#679509] font-bold text-5xl'>$200</p> <span className='mt-6 text-xl line-through'>$201</span>
                            </div>

                            <p className='border-y-2 py-2 mb-6'><span className='text-2xl font-bold text-[#4d4d4d]'>Categories: </span> <span className='text-[15px] font-semibold'>Cover, Seat, Car, Parts</span></p>
                            <div className='flex gap-5 '>
                                <div className='flex  bg-[#679509] border-[#679509] p-[2px]'>
                                    <button onClick={()=>setCount(count - 1)} className='px-2 text-3xl  text-white' >-</button>
                                    <input className='outline-0 w-20 px-8' type="text" value={count} />
                                    <button onClick={()=>setCount(count + 1)} className='px-1  text-3xl text-center text-white'>+</button>
                                </div>
                                <button className='hover:bg-[#2a660a] transition ease-in-out flex items-center gap-2 bg-[#679509] text-white text-lg font-bold px-2'> <FaShoppingCart/> Add To Cart</button>
                            </div>
                            <div className='flex gap-3 text-xl items-center mt-8'>
                                <span className='text-xl mb-1 font-bold text-[#4d4d4d]'>Share:</span>
                                
                                <div className='border-[#679509]  border-[2px] hover:bg-[#679509] hover:text-white'>
                                    <button className='border-l-[#679509] p-2 hover:bg-[#679509] hover:text-white'><FaFacebookF/></button>
                                </div>
                                <div className='border-[#679509] border-[2px] hover:bg-[#679509] hover:text-white'>
                                    <button className='border-[#679509] p-2 hover:bg-[#679509] hover:text-white'><BsTwitter/></button>
                                </div>
                                <div className='border-[#679509] border-[2px] hover:bg-[#679509] hover:text-white'>
                                    <button className='border-[#679509] p-2 hover:bg-[#679509] hover:text-white'><FaPinterestP/></button>
                                </div>
                                <div className='border-[#679509]  border-[2px] hover:bg-[#679509] hover:text-white'>
                                    <button className='border-[#679509] p-2 hover:bg-[#679509] hover:text-white'><FaInstagram/></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>        
                )
        }
        </>
        
    );
};

export default ProductDetails;