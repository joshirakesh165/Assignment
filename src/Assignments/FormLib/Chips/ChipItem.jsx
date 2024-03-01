import React from 'react'

const ChipItem = (props,index) => {
  return (
    <li className="rj-chips-list-item">
    <span>{props.item}</span>
    <span onClick={() => props.removeChipItem(props.item, props.index)}>	&#x2718; </span>
</li>
  )
}

export default ChipItem
