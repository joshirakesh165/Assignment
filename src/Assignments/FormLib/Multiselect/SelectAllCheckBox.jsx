import React from 'react'

const SelectAllCheckBox = (props) => {

    const onSelectUnselectAll = (e) => {
        props.onSelectUnselectAll(e);
    }
    return (
        <>
            <input type="checkbox" className='rj-mutiselect-chcekbox'
                checked={props?.options?.length == props?.selectedOption.length}
                onChange={(e) => onSelectUnselectAll(e)} />
        </>
    )
}

export default SelectAllCheckBox
