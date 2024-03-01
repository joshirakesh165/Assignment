import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Input from '../Input/Input'

const SelectFilter = forwardRef((props,ref) => {
    const [inputValue, setInputValue] = useState(props.selectedItem?.label );
    
    const onInputChange = (e) => {
        setInputValue(e.target.value)
        props.onFilterChange(e)
    }

    const onBlur = () => {
        setInputValue(props.selectedItem?.label);
    }

    useEffect(() => {
        if(props.selectedItem){
            props.selectedItem.value ? setInputValue(props.selectedItem.label) : setInputValue('Select');
        }
    },[props.selectedItem])

    const leftIcon = props?.selectedItem?.iconUrl ? <img src={props?.selectedItem?.iconUrl} alt="" />:'';

    return (
        <div className='rj-drop-down-filter'>
            <Input ref={ref} autoComplete='off' type="text"
                name="ddFilter"
                value ={inputValue}
                onBlur={onBlur}
                leftIcon={leftIcon}
                placeholder ={props.placeholder}
                onChange={(e) => onInputChange(e)} />
        </div>
    )
})

export default SelectFilter
