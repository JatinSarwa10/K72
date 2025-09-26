import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-32 sm:mt-48 lg:mt-0 pt-5 text-center px-2">
      {/* Line 1 */}
      <div className="text-[15vw] sm:text-[12vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[12vw] sm:leading-[10vw] lg:leading-[8vw]">
        The spark
      </div>

      {/* Line 2 with pill video */}
      <div className="text-[15vw] sm:text-[12vw] lg:text-[9.5vw] justify-center flex items-start uppercase leading-[12vw] sm:leading-[10vw] lg:leading-[8vw] flex-wrap">
        <span>Who</span>
        <div className="w-[20vw] h-[10vw] sm:w-[16vw] sm:h-[8vw] lg:w-[14vw] lg:h-[7vw] rounded-full overflow-hidden -mt-1 flex items-center justify-center mx-2">
          <Video />
        </div>
        <span>generates</span>
      </div>

      {/* Line 3 */}
      <div className="text-[15vw] sm:text-[12vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[12vw] sm:leading-[10vw] lg:leading-[8vw]">
        creativity
      </div>
    </div>
  )
}

export default HomeHeroText
