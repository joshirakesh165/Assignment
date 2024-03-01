import React, { useState } from 'react'
import Multiselect from '../FormLib/Multiselect/Multiselect'

const MultiSelectDemo = () => {
    const [selectedValue1, setSelectedValues1] = useState();
    const [selectedValue2, setSelectedValues2] = useState();
    const [selectedValue3, setSelectedValues3] = useState();
    let options = [
        { label: 'Tot', value: 'Tot' },
        { label: 'option 2', value: 'option 2' },
        { label: 'option 3', value: 'option 3' },
        { label: 'option 4', value: 'option 4' },
        { label: 'option 11', value: 'option 11' },
        { label: 'option 21', value: 'option 21' },
        { label: 'option 31', value: 'option 31' },
        { label: 'option 41', value: 'option 41' },
        { label: 'option 111', value: 'option 111' },
        { label: 'option 211', value: 'option 211' },
        { label: 'option 311', value: 'option 311' },
        { label: 'option 411', value: 'option 411' }
    ]

    const onChangeHandler1 = (e, selectedOption) => {
        setSelectedValues1(selectedOption);
    }
    const onChangeHandler2 = (e, selectedOption) => {
        setSelectedValues2(selectedOption);
    }
    const onChangeHandler3 = (e, selectedOption) => {
        setSelectedValues3(selectedOption);
    }
    return (
        <div className='flex'>
            <div>
                <h5> Selected values - {selectedValue1?.map(ops => ops.label).join(", ")}</h5>
                <h5> Drop down with filter</h5>
                <Multiselect
                    options={options}
                    hideSelectAll={false}
                    filter={true}
                    onChange={(e, selectedOption) => onChangeHandler1(e, selectedOption)}
                />
            </div>
            <div style={{marginLeft:'10px'}}>
                <h5> Selected values - {selectedValue2?.map(ops => ops.label).join(", ")}</h5>
                <h5> Drop down with display as chip and filter</h5>
                <Multiselect
                    options={options}
                    hideSelectAll={false}
                    filter={true}
                    filterOnChips={false}
                    display={'chips'}
                    onChange={(e, selectedOption) => onChangeHandler2(e, selectedOption)}
                />
            </div>
            <div style={{marginLeft:'10px'}}>
                <h5> Selected values - {selectedValue3?.map(ops => ops.label).join(", ")}</h5>
                <h5> Drop down with display as chip</h5>
                <Multiselect
                    options={options}
                    hideSelectAll={false}
                    filter={false}
                    filterOnChips={true}
                    display={'chips'}
                    onChange={(e, selectedOption) => onChangeHandler3(e, selectedOption)}
                />
            </div>
        </div>
    )
}

export default MultiSelectDemo
