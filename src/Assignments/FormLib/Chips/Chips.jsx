import React, { useRef, useState } from 'react'
import './chips.css'
import ChipItem from './ChipItem';

const Chips = (props) => {

    const [chipsItem, setChipsItem] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef()

    const addChipItem = (item) => {
        setChipsItem([...chipsItem, item])
    }
    const removeChipItem = (item, i) => {
        setChipsItem([...chipsItem.filter((chip, index) => !(i == index && chip == item))])
    }

    const onEnterClick = (e) => {
        if (e.code == 'Enter' && inputValue) {
            addChipItem(inputValue);
            setInputValue('');
        }
    }
    const onBlurHandler = () => {
        if (inputValue) {
            addChipItem(inputValue);
            setInputValue('');
        }
    }

    const onClickContainer = () => {
        inputRef.current.focus();
    }


    return (
        <div className='rj-chips-container' onClick={onClickContainer}>
            <ul className="rj-chips-list">
                {chipsItem.map((item, index) => (
                    <ChipItem key={index} item={item}
                        index={index}
                        removeChipItem={() => removeChipItem(item, index)} />
                ))}
                {<li>
                    <input className='rj-chips-input' ref={inputRef}
                        type="text"
                        placeholder='Enter text and hit enter'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onBlur={onBlurHandler}
                        onKeyDown={e => onEnterClick(e)} />
                </li>}
            </ul>
        </div>
    )
}

export default Chips
