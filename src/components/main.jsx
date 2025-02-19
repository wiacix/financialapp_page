import React from 'react'
import '../styles/main.css'
import Content from './main/content'
import ScrollAnimations from './main/scrollAnimations'
import Slider from './main/slider'

const Main = () => {
  return (
    <div className='main'>
        <Content />
        <ScrollAnimations />
        <Slider />
    </div>
  )
}

export default Main