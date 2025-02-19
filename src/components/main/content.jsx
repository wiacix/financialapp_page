import React, { useEffect } from 'react'
import '../../styles/content.css'
import { elements_table } from '../../data/content'
import { ContentEle } from './content_ele'

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
    }, []);

  return (
    <div className='content'>
        {elements_table.map((item, index) => {
            return ( <ContentEle item={item} key={index} /> )
        })}
    </div>
  )
}

export default Content
