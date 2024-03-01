import React, { useState } from 'react'
import Dropdown from '../FormLib/Select/Dropdown';

const DropdownDemo = () => {
  const [selected1, setSelected1] = useState();
  const [selected2, setSelected2] = useState();
  const options = [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
    { label: 'option 4', value: 'option 4' }
  ]

  const options2 = [
    { label: 'option 1', value: 'option 1' ,iconUrl:'/task.png'},
    { label: 'option 2', value: 'option 2', iconUrl:'/major.svg'},
    { label: 'option 3', value: 'option 3',iconUrl:'/major.svg'},
    { label: 'option 4', value: 'option 4',iconUrl:'/major.svg'},
  ]

  const onSelect1 = (e, selectedItem) => {
    setSelected1(selectedItem)
  }
  const onSelect2 = (e, selectedItem) => {
    setSelected2(selectedItem)
  }
  return (
    <div className='flex'>
      <div>
        <h3>Drop down with filter</h3>
        <h5>Selected value : {selected1?.label}</h5>
        <Dropdown options={options} placeholder={'--Select--'}   showFilter={true} onSelect={onSelect1} />
      </div>
      <div>
        <h3>Drop down with filter and icons</h3>
        <h5>Selected value : {selected1?.label}</h5>
        <Dropdown options={[...options2]} showIcon={true} placeholder={'--Select--'} showFilter={true} onSelect={onSelect1} />
      </div>
      <div>
        <h3>Drop down without filter</h3>
        <h5>Selected value : {selected2?.label}</h5>
        <Dropdown options={[...options]}  placeholder={'--Select--'} showFilter={false} onSelect={onSelect2} />
      </div>
      <div>
        <h3>Drop down with image</h3>
        <h5>Selected value : {selected2?.label}</h5>
        <Dropdown options={[...options2]} showIcon={true} defaultValue={options2[1]} showFilter={false} onSelect={onSelect2} />
      </div>
    </div>
  )
}

export default DropdownDemo
