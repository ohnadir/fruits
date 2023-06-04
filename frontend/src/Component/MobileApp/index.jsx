import React from 'react'
import "./MobileApp.scss"

const MobileApp = () => {
  return (
    <div className='newsletter '>
      <div className='newsletter-container'>
        <div className='newsletter-content'>
          <h1>Make your online shop easier with our mobile app</h1>
          <h6>Bazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food.</h6>
          <div className='w-fit flex flex-col sm:flex-row gap-5 mx-auto lg:mx-0 mt-5'>
            <a target="_blank" href="https://play.google.com/store/apps" rel="noreferrer">
              <img className='w-[50%]' src="https://kachabazar-store.vercel.app/app/play-store.svg" alt="" />
            </a>
            <a target="_blank" href="https://www.apple.com/app-store/" rel="noreferrer">
              <img className='w-[50%]'  src="https://kachabazar-store.vercel.app/app/app-store.svg" alt="" />
            </a>
          </div>
        </div>
        <img className='large-img' src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&w=640&q=75" alt="" />
      </div>
    </div>
  )
}

export default MobileApp