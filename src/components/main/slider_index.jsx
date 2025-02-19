import React from 'react'

const SliderIndex = (props) => {
    const elements = [];
    for(let i = 0; i < props.elements; i++){
        const klasa = props.index===i ? 'slider_index_curr' : '';
        elements.push(<div key={i} className={`slider_index_ele ${klasa}`}></div>)
    }
  return (
    <div className='slider_index'>
      {elements}
    </div>
  )
}

export default SliderIndex
