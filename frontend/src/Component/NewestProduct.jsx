import React, { useState } from 'react'
import "../Style/NewestProduct.css"
import photo from "../assets/hr2.png";
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr';
import { MdClose } from 'react-icons/md';
import { Modal } from 'antd';
import ProductDetails from './Modal/ProductDetails';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';

const NewestProduct = () => {
    const [open, setOpen] = useState(false);
    return (
            <div className='max-w-7xl mx-auto px-10 my-16'>
                <div className='bg-white w-[220px] relative cardItem' >
                    <img className='w-[200px] photo' src={photo} alt="" />
                    <div>
                        <FaRegHeart  className="absolute top-2 right-2 text-[28px] border rounded-full p-[4px]" />
                        <p className='absolute top-0 px-[10px] bg-[#679509] w-fit text-white'>New</p>
                    </div>
                    <div className='hoverBtn '>
                        <div className='grid grid-cols-1 gap-3'>
                            <button className='cartBtn'>
                                <span className='text-1' >add to cart</span>
                                <span className='' ><AiOutlineShoppingCart className='text-2' /></span>

                            </button>
                            <button className='cartBtn' onClick={()=>setOpen(true)}>
                                <span className='text-1' >quick view</span>
                                <span className='' ><GrFormView className='text-2 text-3' /></span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='m-0 text-center'>
                            <Rating
                                initialRating={3.5}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                readonly
                            ></Rating>
                        </p>
                        <p className='m-0 text-center'>Carrots Group Scal</p>
                        <p className='m-0 text-center text-[#679509] font-extrabold'>$200</p>
                    </div>
                </div>
                {
                    open && 
                        <Modal
                            width={1000}
                            open={open}
                            onCancel={()=>setOpen(false)}
                            bodyStyle={{padding:"0", margin:"0", border:"none" }}
                            footer={null}  >
                                <ProductDetails/>
                        </Modal>
                }
            </div>
    )
}

export default NewestProduct