import React, { useState } from 'react'
import SelectAllCheckBox from './SelectAllCheckBox';
import MutiselectFilter from './MutiselectFilter';

const MutiselectHeader = (props) => {
    
    const closeIconUI = <img src="/x.svg" alt="close drop down"
        onClick={props.closeDropDown}
        className='rj-multiselect-header-cross-icon' />

    return (
        <>
            {(props.filter || !props.hideSelectAll) &&
                <>
                    <div className='rj-multiselect-header'>
                        {(!props.hideSelectAll) && <SelectAllCheckBox options={props.options} selectedOption={props.selectedOption} onSelectUnselectAll ={props.onSelectUnselectAll}/> }
                        {props.filter && <MutiselectFilter onFilterChange={props.onFilterChange}/>}
                        {closeIconUI}
                    </div>
                    <hr />
                </>
            }
        </>

    )
}

export default MutiselectHeader
