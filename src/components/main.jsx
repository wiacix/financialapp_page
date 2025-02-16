import React from 'react'
import '../styles/main.css'
import Content from './main/content'
import ScrollAnimations from './main/scrollAnimations'

const Main = () => {
  return (
    <div className='main'>
        <Content />
        <ScrollAnimations />
    </div>
  )
}

export default Main