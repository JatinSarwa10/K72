import React from 'react'

const Video = () => {
  return (
    <video
      className="w-full h-full object-fill rounded-xl "
      autoPlay
      loop
      muted
      playsInline
      src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757579635~exp=1757583235~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=f194648937d09906ee225b4a8efbcad1d2e746ae69d1d5def9f28b615b7012f2&r=dXMtd2VzdDE%3D"
    />
  )
}

export default Video