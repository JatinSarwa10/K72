import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-72 lg:mt-0 pt-5 text-center">
      {/* Line 1 */}
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        The spark
      </div>

      {/* Line 2 with pill video */}
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
        Who
        <div className="w-[14vw] h-[7vw] rounded-full  overflow-hidden   -mt-1 flex items-center justify-center mx-2">
  <Video />
</div>
        generates
      </div>

      {/* Line 3 */}
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        creativity
      </div>
    </div>
  )
}

export default HomeHeroText
