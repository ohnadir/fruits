import React from 'react'
import "./MobileApp.scss"

const MobileApp = () => {
  return (
    // mobile app container start 
    <div className='newsletter '>
      <div className='newsletter-container'>
        <div className='newsletter-content'>
          
          <h1>Make your online shop easier with our mobile app</h1>
          <h6>Bazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food.</h6>

          {/* app link container start */}
          <div className=' app-container'>

            {/* apple phone app section start */}
            <a target="_blank" href="https://play.google.com/store/apps" rel="noreferrer">
              <img className='w-[50%]' src="https://kachabazar-store.vercel.app/app/play-store.svg" alt="" />
            </a>
            {/* apple phone app section end */}

            {/* android phone app section start */}
            <a target="_blank" href="https://www.apple.com/app-store/" rel="noreferrer">
              <img className='w-[50%]'  src="https://kachabazar-store.vercel.app/app/app-store.svg" alt="" />
            </a>
            {/* android phone app section end */}

          </div>
          {/* app link container start */}

        </div>
        <img className='large-img' src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&w=640&q=75" alt="" />
      </div>
    </div>
    // mobile app container end 
  )
}

export default MobileApp