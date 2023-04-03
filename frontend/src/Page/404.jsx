import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='max-w-4xl mx-auto px-10 '>
            <div className='flex items-center justify-center h-full pt-10'>
                <div className='w-[400px]'>
                    <img className='mx-auto ' src="https://preetheme.com/html/fruits/assets/img/image-404.png" alt="" />
                    <p className='text-3xl font-extrabold m-0 text-center'>Page Not Found</p>
                    <p className='m-0 text-xl text-center my-3'>Something went wrong, looks like this page doesn't exist anymore.</p>
                    <button onClick={()=>navigate("/")} className='mx-auto flex items-center justify-center bg-[#679509] px-10 text-white py-[8px] rounded-[22px]'>Back Home</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound 