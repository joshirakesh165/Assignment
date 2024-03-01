import React, { useEffect, useRef, useState } from 'react'
import optionData from './optionData';
import './Autocomplete.css'
import useDebounce from '../../../hooks/useDebounce';

const Autocomplete = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [showOption, setShowOption] = useState(false);
    const [options, setOptions] = useState([]);
    const autocomplete = useRef();


    const fakeAysnc = (query) => {
        console.log('async...')
        return new Promise((res,rej) => {
            setTimeout(() => {
                let data =  optionData.filter(opt => opt.label.toLowerCase().includes(query.toLowerCase()))
                res(data)
            },100)   
        })
    }

    const withDebounce = useDebounce(async (query) => {
        if (query) {
            let data = await fakeAysnc(query);
            if (data && data.length > 0) {
                setShowOption(true);
                setOptions(data);
            } else {
                setOptions(null);
                props?.onSelect(null);
            }
            
        }
    })
    const onInputChange = (e) => {
        setInputValue(e.target.value);
        withDebounce(e.target.value) ;
    }
    const onSelctOption = (option) => {
        setInputValue(option.label)
        setShowOption(false);
        props?.onSelect(option);
    }

    const handleClickOutSide = (e) => {
        console.log(autocomplete.current, e)
        if (showOption) {
            setOptions(null);
            props?.onSelect(option);
        }
        if (autocomplete.current && !autocomplete.current.contains(e.target)) {
            setShowOption(false);
        }
    }


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);


    const optionsUI = (
        <div className='rj-autocomplete-option-wrapper'>
            {options?.map((option, index) => (
                <div className='rj-autocomplete-option'
                    key={index}
                    onClick={() => onSelctOption(option)}>
                    {option.value}
                </div>
            ))}
        </div>
    );

    const inputUI = (
        <div>
            <input className='rj-autocomplete-input'
                type="text" placeholder='Autocomplete'
                value={inputValue}
                onChange={onInputChange} />
        </div>
    );

    return (
        <div className='rj-autocomplete-wrapper' ref={autocomplete}>
            {inputUI}
            {showOption && optionsUI}
        </div>
    )
}

export default Autocomplete
