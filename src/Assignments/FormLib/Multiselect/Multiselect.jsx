import React, { useRef } from 'react'
import './Multiselect.css';
import useSelect from './useSelect';
import MutiselectFilter from './MutiselectFilter';
import OptionUI from './OptionUI';
import MutiselectHeader from './MultiselectHeader';

const Multiselect = (props) => {
    const multiselect = useRef();
    const { options,
        showOptions,
        selectedOption,
        closeDropDown,
        toggleDropDown, onChange,
        onSelectUnselectAllCheck,
        onFilterChange,
        removeOption } = useSelect(props.value, props.options, multiselect, props.onChange);

    const isItemChecked = (option) => selectedOption.find(opt => opt.value == option.value) ? true : false;

    const chipsUI = <div className='rj-multiselect-chip-wrapper'>
        { (!props.filterOnChips) && selectedOption.length == 0 ? props.placeholder || 'Select' : selectedOption.map(option =>
            <span key={option.value} className='rj-multiselect-chip'>
                <span>{option.label}</span>
                <img onClick={(e) => removeOption(e, option)} className='rj-mutiselect-chip-cross-icon' src="/x.svg" alt="" />
            </span>)
        }
        {props.filterOnChips && <MutiselectFilter
            onFilterChange={onFilterChange}
            placeholder={selectedOption.length == 0 ? props.placeholder || 'Slect' : 'Type to filter'} />}
    </div>

    const getSelectLable = () => {
        if (props.display == 'chips') {
            return chipsUI;
        } else {
            if (selectedOption.length == 0) return props.placeholder || 'Select'
            else {
                return (selectedOption.length < 3) ? selectedOption.map(ops => ops.label).join(", ")
                    : `${selectedOption.length} Items selected`;
            }
        }
    }


    return (
        <div className='rj-multiselect-wrapper' ref={multiselect}>
            <div className={`rj-multiselect-input ${showOptions ? 'rj-focus' : ''}`} onClick={toggleDropDown}>
                {getSelectLable()}
                <img className='rj-mutiselect-arrow' src='/chevron-down.svg' />
            </div>
            <div hidden={!showOptions} className='rj-option-wrapper'>
                <MutiselectHeader
                    onSelectUnselectAll={onSelectUnselectAllCheck}
                    options={options}
                    selectedOption={selectedOption}
                    filter={props.filter}
                    hideSelectAll={props.hideSelectAll}
                    closeDropDown={closeDropDown}
                    display={props.display}
                    onFilterChange={(query) => onFilterChange(query)} />
                <OptionUI
                    isItemChecked={isItemChecked}
                    onChange={onChange}
                    options={options} />
            </div>
        </div>
    )
}

export default Multiselect
