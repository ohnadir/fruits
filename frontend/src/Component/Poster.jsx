import React from 'react';
import poster from '../assets/banner1.jpg'
import poster1 from '../assets/banner2.jpg'
import '../App.css'

const Poster = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 my-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='poster'>
                    <img className='w-full images' src={poster} alt="" />
                    <div className='overlay'>
                    <div className='overlay2'></div>
                    </div>
                </div>
                <div className='poster'>
                    <img className='w-full images' src={poster1} alt="" />
                    <div className='overlay'>
                    <div className='overlay2'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poster;