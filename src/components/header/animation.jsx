import React, { useEffect } from 'react'
import '../../styles/animation.css'
import AOS from 'aos'
import "aos/dist/aos.css";

const Animation = () => {

  useEffect(() => {
    const video = document.getElementById('animationHeader');
    if(video){

      video.addEventListener('playing', () => {
        setTimeout(() => {
          document.querySelector('.theme-switcher').classList.add('theme-switcher_in')
        }, 8000)
      })

      video.addEventListener('ended', () => {
        document.querySelector('.header-text-h1').classList.add('header-text_in');
        document.body.classList.remove('no-scroll');
        setTimeout(() => {
          document.querySelector('.header-text-h2:nth-child(1)').classList.add('header-text_in');
          //document.querySelector('.ele1').classList.add('ele_anim');
          document.querySelector('.ele1').setAttribute('data-aos', 'fade-up-right');
          AOS.init();
          setTimeout(() => {
            document.querySelector('.header-text-h2:nth-child(2)').classList.add('header-text_in');
            //document.querySelector('.ele2').classList.add('ele_anim');
            document.querySelector('.ele2').setAttribute('data-aos', 'fade-up');
            AOS.init();
            setTimeout(() => {
              document.querySelector('.header-text-h2:nth-child(3)').classList.add('header-text_in');
              //document.querySelector('.ele3').classList.add('ele_anim');
              document.querySelector('.ele3').setAttribute('data-aos', 'fade-up-left');
              AOS.init();
              document.querySelector('.scroll').classList.remove('scroll-disable');
              setTimeout(() => {
                document.querySelector('.scroll').classList.add('scroll-disable');
              }, 5000)
            }, 200)
          }, 200)
        }, 300)
      });
    }
  })

  return (
    <div className='animationBox'>
      <video autoPlay muted width="90%" id='animationHeader'>
        <source src="/assets/headerAnim.webm" type="video/webm" />
        Twoja przeglądarka nie obsługuje tagu video.
      </video>
    </div>
  )
}

export default Animation