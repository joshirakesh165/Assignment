/*
  idea is -
  on scroll of  table we will find sctollTop position
  change the visible data from sctolltop position to next (scolltop +limit)
  firstRowIndex (scollTop/row height)  and  lastRowIndex = firstIndex + limit
  one tr will be added to top with height  eq to (no of hidden rows * heightof one row) -> firstRowindex * height
  one row added add the end having height eq to height of total possiblerows - top row height
*/

import React, { useState } from 'react'
import data from './data'

let tableStyle = {  
    display: 'block',
    height: '500px',
    overflow: 'scroll'
}

const tdStyle = {
    padding: '8px',
    border: '1px solid #ccc'
}

const rowHeight = 36.5; // calculated from dom
const limit = 13 // can find from visible web page 


function VirtualScroll() {
    const [scrollTop,setScrolTop] = useState(0)

    const firstRowIndex = Math.ceil(scrollTop/rowHeight);
    const lastRowIndex = Math.ceil(scrollTop/rowHeight) + limit - 1;
    const visibleData = data.slice(firstRowIndex, lastRowIndex);
    
    const startRowH = firstRowIndex * rowHeight;
    const endRowH = (rowHeight * data.length - startRowH);


    const onTableScroll = (e) => {
        setScrolTop(e.nativeEvent.target.scrollTop);

    }

    return (
        <table style={tableStyle} onScroll={onTableScroll}>
            <tbody >
            <tr style={{ height: startRowH + 'px' }}></tr>
                {visibleData.map(row => (
                    <tr key={row.id}>
                        <td style={tdStyle}>{row.id}</td>
                        <td style={tdStyle}>{row.name}</td>
                        <td style={tdStyle}>{row.details}</td>
                        <td style={tdStyle}>{row.author}</td>
                    </tr>
                ))}
                <tr style={{ height: endRowH + 'px' }}></tr>
            </tbody>
        </table>
    )
}

export default VirtualScroll


