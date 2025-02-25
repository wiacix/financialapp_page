import React, { useState } from 'react'
import '../../styles/slider.css'
import { elements_slider } from '../../data/content';
import SliderIndex from './slider_index';
import * as GF from '../functions'

const Slider = () => {
    const [currEle, setCurrEle] = useState(0);
    const width = window.innerWidth;
    const changeEle = (i) => {
        document.querySelector('.slider_img').classList.add('slider_img_anim');
        document.querySelector('.slider_box_text_h2').classList.add('slider_box_text_h2_anim');
        document.querySelector('.slider_box_text_p').classList.add('slider_box_text_p_anim');
        setTimeout(() => {
            if((currEle+i) >= elements_slider.length) setCurrEle(0);
            else if((currEle+i)<0) setCurrEle(elements_slider.length-1);
            else setCurrEle(currEle+i);
            setTimeout(() => {
                document.querySelector('.slider_img').classList.remove('slider_img_anim');
                document.querySelector('.slider_box_text_h2').classList.remove('slider_box_text_h2_anim');
                document.querySelector('.slider_box_text_p').classList.remove('slider_box_text_p_anim');
            }, 200);
        }, 300);
    }

    return (
        <div className='slider' data-aos='zoom-in-up'>
            <h2>Modules available in the application</h2>
            <div className='slider_contener'>
                <div className='slider_box_img'>
                <button className='slider_btn left_btn' onClick={() => changeEle(-1)}>
                    <p>&larr;</p>
                </button>
                    <div className='slider_box_bg' />
                    <img className='slider_img' src={elements_slider[currEle].img} alt='Screen from App' />
                </div>
                <div className='slider_box'>
                    <button className='slider_btn right_btn' onClick={() => changeEle(1)}>
                        <p>&rarr;</p>
                    </button>
                    <div className='slider_box_text'>
                        <h2 className='slider_box_text_h2'>{width>=1300 ? elements_slider[currEle].header : elements_slider[currEle].m_header}</h2>
                        <p className='slider_box_text_p'>{width>=1300 ? GF.removeWidows(elements_slider[currEle].description) : GF.removeWidows(elements_slider[currEle].m_description)}</p>
                    </div>
                    <SliderIndex elements={elements_slider.length} index={currEle} />
                </div>
            </div>
        </div>
    )
}

export default Slider
