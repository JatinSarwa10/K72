import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 overflow-hidden px-4 pb-8 sm:pb-4'>
      <div className='border-3 h-16 sm:h-20 lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-4 sm:px-6 lg:px-10 border-white rounded-full uppercase transition-colors'>
        <Link className='text-[8vw] sm:text-[6vw] mt-2 sm:mt-4 lg:mt-6 whitespace-nowrap' to='/projects' >Projects </Link>
      </div>
      <div className='border-3 h-16 sm:h-20 lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-4 sm:px-6 lg:px-10 border-white rounded-full uppercase transition-colors'>
        <Link className='text-[8vw] sm:text-[6vw] mt-2 sm:mt-4 lg:mt-6 whitespace-nowrap' to ='/agence'>Agence </Link>
      </div>
    </div>
  )
}

export default HomeBottomText