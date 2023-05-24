import React from 'react'
import cartHeader from '../assets/breadcrumb.jpg'
import { MdOutlineDoubleArrow } from 'react-icons/md'
const Cover = ({name}) => {
    return (
        <div className='relative'>
            <img src={cartHeader} className='h-[200px] w-full' alt="" />
            <div className=" absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                <div className='flex gap-8'>
                    <div>
                        <h1 className="text-2xl font-bold text-white">{name}</h1>
                        <h5 className='flex items-center gap-4 text-xl text-white'>
                            <span>Home</span> 
                            <MdOutlineDoubleArrow /> 
                            <span>{name}</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover