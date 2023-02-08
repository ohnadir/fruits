import React from 'react'
import "../Style/NewestProduct.css"
import photo from "../assets/hr2.png";
import { FaRegHeart } from 'react-icons/fa';

const NewestProduct = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 my-16'>
            <div className='bg-white w-[220px] relative'>
                <img className='w-[200px]' src={photo} alt="" />
                <div>
                    <FaRegHeart className="absolute top-2 right-2 text-[28px] border rounded-full p-[4px]" />
                    <p className='absolute top-0 px-[10px] bg-[#679509] w-fit text-white'>New</p>
                </div>
                <div className='hoverBtn '>
                    <div className='grid grid-cols-1 gap-3'>
                        <div className='btnContent'>   
                            <button>add to cart</button>
                        </div>
                        <div className='btnContent'>
                            <button>quick view</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='m-0 text-center'>*****</p>
                    <p className='m-0 text-center'>Carrots Group Scal</p>
                    <p className='m-0 text-center text-[#679509] font-extrabold'>$200</p>
                </div>
            </div>
        </div>
    )
}

export default NewestProduct