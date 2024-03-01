import React, { useEffect, useRef } from 'react'
import './Dropdown.css'
import useDropDown from './useDropdown';
import SelectFilter from './SelectFilter';
import useClickOutSide from '../useClickOutSide';
import OptionsUi from './OptionsUi';

const Dropdown = (props) => {
    const inputRef = useRef();
    const dropDownRef = useRef();

    const {
        isopen, selectedItem, toggleDropDown,
        onClickOption, ddOptions, onFilterChange, closeDropDown
    } = useDropDown(props.options, props.onSelect, props.defaultValue, inputRef);

    useClickOutSide(dropDownRef, closeDropDown);


    const selectionUI = props.showFilter ?
        <SelectFilter ref={inputRef} selectedItem={selectedItem} placeholder={props.placeholder} onFilterChange={onFilterChange} />
        : <div className={`rj-drop-down-selected-item ${isopen ? 'rj-drop-down-selected-item-focused' : ''}`}>
            {selectedItem?.iconUrl && props.showIcon &&
                <span className='rj-drop-down-selected-item-img'>
                    <img src={selectedItem?.iconUrl} alt="" />
                </span>}
            <span className={`rj-drop-down-selected-item-label ${!selectedItem?.label ? 'placeholder' :''}`}>
                {selectedItem?.label || props.placeholder}
            </span>
        </div>

    return (
        <div className='rj-drop-down-container' ref={dropDownRef}>
            <div className='rj-drop-down-header' onClick={toggleDropDown}>
                {selectionUI}
                <img className='rj-drop-down-arrow' src='/chevron-down.svg' />
            </div>
            {isopen && <OptionsUi options={ddOptions} showIcon={props.showIcon} onClickOption={onClickOption} />}
        </div>

    )
}

export default Dropdown
