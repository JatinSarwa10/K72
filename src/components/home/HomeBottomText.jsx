import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[6vw] leading-[7vw] uppercase border-5  border-white rounded-full pt-3 px-10' >Projects </Link>
      <Link className='text-[6vw] leading-[7vw] uppercase border-5  border-white rounded-full pt-3 px-10'>Agence </Link>
    </div>
  )
}

export default HomeBottomText