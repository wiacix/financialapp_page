import React, { useEffect } from 'react'
import '../../styles/content.css'

const Content = () => {

    useEffect(() => {
        const readMoreContainers = document.querySelectorAll('.read-more-container');
    
        readMoreContainers.forEach(container => {
            container.addEventListener('mouseover', () => {
                container.querySelector('.read-more-arrows').classList.add('arrows_animation');
            });
            
            container.addEventListener('mouseout', () => {
                container.querySelector('.read-more-arrows').classList.remove('arrows_animation');
            });
        });
    }, [])

  return (
    <div className='content'>
        <div className="ele1 content_ele">
            <h2>Project in Figma</h2>
            <img src='./assets/Figma-logo.png' alt='Figma logo' className='content_ele_box_logo'/>
            <div className='content_ele_box'>
                <div className='content_ele_box_pictures'>
                    <img src='./assets/figma.png' alt='Project in Figma' className='content_ele_box_img' />
                </div>
                <p>I meticulously crafted the initial design of this app in Figma. It was crucial for me to ensure a seamless user experience, and Figma's tools allowed me to perfect </p>
                <a className='read-more-container' href='https://www.figma.com/design/bBthPHwZKTCna1567ksL34/FinanceApp?node-id=17-2&t=ahrtBsCDC2zRejAi-1' target='_blank' rel="noreferrer">
                    <div>
                        <p className='read-more-text'>See more</p>
                        <p className='read-more-arrows'>→→</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="ele2 content_ele">
            <h2>App in React Native</h2>
            <img src='./assets/React-icon.png' alt='Figma logo' className='content_ele_box_logo'/>
            <div className='content_ele_box'>
                <div className='content_ele_box_pictures'>
                    <img src='./assets/React.png' alt='Project in Figma' className='content_ele_box_img' />
                </div>
                <p>Using React Native, I built this app to deliver a consistent and responsive experience across both iOS and Android platforms. I focused on creating an intuitive interface and smooth performance.</p>
                <a className='read-more-container' href='https://github.com/wiacix/FinancialApp/tree/SettingModule' target='_blank' rel="noreferrer">
                    <div>
                        <p className='read-more-text'>See GitHub</p>
                        <p className='read-more-arrows'>→→</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="ele3 content_ele">
            <h2>API in PHP</h2>
            <img src='./assets/php-logo.png' alt='Figma logo' className='content_ele_box_logo'/>
            <div className='content_ele_box'>
                <div className='content_ele_box_pictures'>
                    <img src='./assets/PHP.png' alt='Project in Figma' className='content_ele_box_img' />
                </div>
                <p>I developed a robust and efficient API in PHP to handle all data interactions with the server database. This API ensures that the app runs smoothly and efficiently, providing a seamless user experience.</p>
                <a className='read-more-container' href='https://github.com/wiacix/API' target='_blank' rel="noreferrer">
                    <div>
                        <p className='read-more-text'>See GitHub</p>
                        <p className='read-more-arrows'>→→</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Content
