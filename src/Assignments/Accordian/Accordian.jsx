import React, { useState } from 'react'
import './Accordian.css'

const Accordian = (props) => {
    const [expand, setExpand] = useState(false);

    const toggleImage = () => {
        setExpand(state => state = !state )
    }
    
    return (
        <div className='accordian-wrapper'>
            <header className='flex accordian-header'>
                <img src={expand ? '/chevron-down.svg' : '/chevron-right.svg'} onClick={toggleImage} />
                <h3>{props.title}</h3>
            </header>
            <section hidden={!expand} className='accordian-content'>{props.children}</section>
        </div>
    )
}

export default Accordian
