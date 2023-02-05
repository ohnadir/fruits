import React from 'react'
import categories from "../Category.json";
import '../Style/Category.css'
import { BsPlusLg } from 'react-icons/bs';

const Category = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 my-16'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 '>
                {
                    categories.map((item)=> <div className=''>
                        <div className='item'>
                            <img className='  rounded-[50%]' src={item.img} alt="" />
                            <div className='itemOverlay'><BsPlusLg className='plusIcon'/> </div>
                        </div>
                        <p className='text-center m-0 font-semibold mt-[5px]'>{item.name}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Category