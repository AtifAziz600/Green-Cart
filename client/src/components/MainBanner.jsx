import React from 'react'
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt='banner' className='w-full hidden md:block'/>
      <img src={assets.main_banner_bg_sm} alt="banner_sm" className='w-full md:hidden' />
      <div>
        <h1>Freshness you can trust, Savings you will love</h1>
      </div>
    </div>
  )
}

export default MainBanner
