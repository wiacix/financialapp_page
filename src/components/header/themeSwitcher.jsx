import React from 'react'
import '../../styles/themeSwitcher.css'

const ThemeSwitcher = () => {

    const switchTheme = () => {
        if(document.body.className==="bg-dark bg-dark-delay"){
            document.body.classList.remove("bg-dark");
            document.body.classList.add("bg-light");
            setTimeout(() => {
                document.body.classList.remove("bg-dark-delay");
                document.body.classList.add("bg-light-delay");
            },300)
        }else {
            document.body.classList.remove("bg-light");
            document.body.classList.add("bg-dark");
            setTimeout(() => {
                document.body.classList.add("bg-dark-delay");
                document.body.classList.remove("bg-light-delay");
            },300)
        }
    }

    setTimeout(() => {
        document.querySelector('.theme-switcher').classList.add('theme-switcher_in')
    }, 8000)

    return (
        <div className='theme-switcher' onClick={switchTheme}>
            <div className='theme-switcher__button' />
            <div className='theme-switcher_ele theme-switcher_ele1'/>
            <div className='theme-switcher_ele theme-switcher_ele2'/>
        </div>
    )
}

export default ThemeSwitcher