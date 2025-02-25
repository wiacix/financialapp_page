import React from 'react'
import '../../styles/content.css'
import * as GF from '../functions'

export const ContentEle = (props) => {
    return (
        <div className={props.item.className}>
            <h2>{props.item.h2}</h2>
            <img src={props.item.imgLogo} alt={props.item.altLogo} className='content_ele_box_logo'/>
            <div className='content_ele_box'>
                <div className='content_ele_box_pictures'>
                    <img src={props.item.imgApp} alt={props.item.altApp} className='content_ele_box_img' />
                </div>
                <p>{GF.removeWidows(props.item.p)}</p>
                <a className='read-more-container' href={props.item.href} target='_blank' rel="noreferrer">
                    <div>
                        <p className='read-more-text'>{props.item.pHref}</p>
                        <p className='read-more-arrows'>→→</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
