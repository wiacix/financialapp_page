import React from 'react'
import '../../styles/animation.css'

const Animation = () => {

  return (
    <div className='animationBox'>
      <video autoPlay muted width="90%">
        <source src="/assets/headerAnim.webm" type="video/webm" />
        Twoja przeglądarka nie obsługuje tagu video.
      </video>
    </div>
  )
}

export default Animation