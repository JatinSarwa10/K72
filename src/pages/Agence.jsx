import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(()=>{
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 30%",
        end:"top -70%",
        pin:true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin:1,
        invalidateOnRefresh:true,
        scrub:true,
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
          imageIndex =Math.floor(elem.progress * imageArray.length)
          }else{
            imageIndex = imageArray.length-1;
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className='overflow-x-hidden'>
      <div className='section1 relative py-1 px-4 sm:px-6 lg:px-8'>
        <div ref={imageDivRef} className='absolute w-[25vw] h-[35vw] sm:w-[20vw] sm:h-[28vw] lg:w-[14vw] lg:h-[20vw] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl top-40 sm:top-48 lg:top-60 left-4 sm:left-8 lg:left-110'>
          <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[45vh] sm:mt-[50vh] lg:mt-[55vh]'>
            <h1 className='text-[18vw] sm:text-[20vw] lg:text-[20vw] text-center uppercase leading-[16vw] sm:leading-[18vw] lg:leading-[18vw] px-4'>SEVEN7Y <br />
    TWO</h1>
          </div>
          <div className='mt-10 sm:mt-12 lg:mt-10 px-4 sm:px-6 lg:pl-[40%]'>
            <p className='text-lg sm:text-3xl lg:text-5xl leading-relaxed sm:leading-relaxed lg:leading-normal'>We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
        
      </div>
   </div>
  )
}

export default Agence