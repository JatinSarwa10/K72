import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white text-3xl sm:text-4xl lg:text-6xl'>
        <div className='h-screen w-full fixed'>
            <Video />
        </div>
        <div className='h-screen w-full relative flex flex-col justify-between px-4 sm:px-6 lg:px-0'>
            <HomeHeroText />
            <HomeBottomText />
        </div>
    </div>
  )
}

export default Home