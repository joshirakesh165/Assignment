import React from 'react'

const OptionUI = (props) => {
    return (
        <>
            {props.options?.map((option, index) => (
                <label key={index} className='rj-option'>
                    <input type="checkbox" className='rj-mutiselect-chcekbox'
                        checked={props.isItemChecked(option)}
                        id="option" onChange={(e) => props.onChange(e, option)} />
                    <span htmlFor="option">
                        {option.label}
                    </span>
                </label>
            ))}

        </>
    )
}

export default OptionUI
