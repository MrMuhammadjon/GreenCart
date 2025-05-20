import React from 'react'
import { assets } from '../assets/assets/assets'

const BottomBanner = () => {
  return (
    <>
    <div className="relative mt-24">
        <img src={assets.bottom_banner_image} alt="Banner" className='w-full hidden md:block'/>
        <img src={assets.bottom_banner_image_sm} alt="Mannser-sm" className='w-full md:hidden'/>
        <div className="absloute inset-0 flex flex-col items-center "></div>
    </div>
    </>
  )
}

export default BottomBanner
