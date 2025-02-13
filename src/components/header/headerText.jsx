import React from 'react'
import '../../styles/headerText.css'

const HeaderText = () => {
  setTimeout(() => {
    document.querySelector('.header-text-h1').classList.add('header-text_in');
    setTimeout(() => {
      document.querySelector('.header-text-h2:nth-child(2)').classList.add('header-text_in');
      setTimeout(() => {
        document.querySelector('.header-text-h2:nth-child(3)').classList.add('header-text_in');
        setTimeout(() => {
          document.querySelector('.header-text-h2:nth-child(4)').classList.add('header-text_in');
        }, 200)
      }, 200)
    }, 500)
  }, 9000)

  return (
    <div className='header-text'>
        <h1 className='header-text-h1'>FinancialApp</h1>
        <h2 className='header-text-h2'>First point</h2>
        <h2 className='header-text-h2'>Second point</h2>
        <h2 className='header-text-h2'>Third point</h2>
    </div>
  )
}

export default HeaderText