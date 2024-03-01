import React, { useState } from 'react'
import Autocomplete from '../FormLib/Autocomplete/Autocomplete'

const AutocompleteDemo = () => {
    const [value,setValue] = useState(null);

  const onSelect =(option) => {
    setValue(option)
  }  
  return (
    <div>
      <h4>Selected value : {value?.value}</h4>
      <Autocomplete onSelect= {(option) => onSelect(option)} />
    </div>
  )
}

export default AutocompleteDemo
