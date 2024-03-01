import React from 'react'

const OptionsUi = ({ options, onClickOption,showIcon }) => {
    return (
        <div className='rj-drop-down-option-container'>
            {options.map((option, index) =>
                <div className="rj-drop-down-option"
                    key={index}
                    onClick={(e) => onClickOption(e, option)}>
                    {option?.iconUrl && showIcon && <span className='rj-drop-down-option-img'><img src={option.iconUrl} alt="" /></span>}
                    <span className='rj-drop-down-option-label'>{option.label}</span>
                </div>
            )}
        </div>
    )
}

export default OptionsUi
