import React, { useState } from 'react'

const MutiselectFilter = (props) => {
    const [query, setQuery] = useState('');

    const onInputChange = (e) => {
        setQuery(e.target.value)
        props.onFilterChange(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder={props.placeholder} className='rj-multiselect-filter-input' value={query} onChange={onInputChange} />
        </>

    )
}

export default MutiselectFilter
