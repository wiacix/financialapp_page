import React from 'react'
import '../styles/header.css'
import ThemeSwitcher from './header/themeSwitcher'
import Animation from './header/animation'
import HeaderText from './header/headerText'

const Header = () => {

  return (
    <div className='header'>
      <ThemeSwitcher />
      <Animation />
      <HeaderText />
    </div>
  )
}

export default Header