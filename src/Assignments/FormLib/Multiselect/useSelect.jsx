import React, { useState } from 'react'
import useClickOutSide from '../useClickOutSide';

const useSelect = (value,allOptions,dropDownRef,onChangeHandller) => {
    const [options, setOptions] = useState(allOptions)

    const [selectedOption, setSelectedOptions] = useState(value || []);
    const [showOptions, setShowOptions] = useState(false);
    const handleClickOutSide = (e) => {
        setShowOptions(false);
    }

    useClickOutSide(dropDownRef,handleClickOutSide);
    const openDropDown = () => {
        setShowOptions(true);
    }

    const closeDropDown = () => {
        if (showOptions) {
            setShowOptions(false);
        }
    }

    const toggleDropDown = () => {
        setShowOptions(state => state = !state);
    }

    const onChange = (e, option) => {
        let newValues = [];
        if(e.target.checked) {
            newValues= [...selectedOption, option];
        } else {
            newValues = selectedOption.filter(opt => opt.value !== option.value);
        }
        updateSelectedValues(e,newValues)
    }

    const updateSelectedValues = (e,newValues) => {
        setSelectedOptions(newValues);
        if(onChangeHandller){
            onChangeHandller(e,newValues);
        }
    }

    const onSelectUnselectAllCheck = (e) => {
        let newValues = [] 
        if(e.target.checked){
            newValues= [...allOptions];
        } else {
            newValues =[];
        }
        updateSelectedValues(e,newValues)
    }

    const onFilterChange = (query) => {
        if (query.trim()) {
            setOptions(allOptions.filter(opt => String(opt.label).toLowerCase().includes(query.toLowerCase())));
        } else {
            setOptions(allOptions);
        }
    }

    const removeOption = (e,option) => {
        e.preventDefault();
        let newValues = selectedOption.filter(opt => opt.value !== option.value);
        updateSelectedValues(e,newValues)
        
    }


  
    return {
        options,
        selectedOption,
        showOptions,
        openDropDown,
        closeDropDown,
        onChange,
        toggleDropDown,
        onSelectUnselectAllCheck,
        onFilterChange,
        removeOption
  }
}

export default useSelect
