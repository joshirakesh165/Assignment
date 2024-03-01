import React, { useState } from 'react'
import generatePassword from './generatePassword'
import './Password.css'

const PasswordGenerate = () => {
    const [lowercase, setLowercase] = useState(true)
    const [uppercase, setUppercase] = useState(true)
    const [numeric, setNumeric] = useState(true)
    const [special, setSpecial] = useState(true)
    const [length, setLength] = useState(4)
    const [password, setPassword] = useState('');

    const onGeneratePasswordClick = () => {
        let pass = generatePassword(lowercase, uppercase, numeric, special, length);
        setPassword(pass)
    }

    return (
        <><div>
            <div className='pwd-input' style={{ color: 'red' }}>
                <label htmlFor="allowedLowercase">Include Lower case</label>
                <input type="checkbox" id='allowedLowercase' defaultChecked={lowercase} value={lowercase} onChange={() => setLowercase(state => state = !state)} />
            </div>
            <div className='pwd-input' style={{ color: 'black' }}>
                <label htmlFor="allowedUppercase">Include upper case</label>
                <input type="checkbox" id='allowedUppercase' defaultChecked={uppercase} value={uppercase} onChange={() => setUppercase(state => state = !state)} />

            </div>
            <div className='pwd-input' style={{ color: 'green' }}>
                <label htmlFor="allowedSpecial">Include Special characters</label>
                <input type="checkbox" id='allowedSpecial' defaultChecked={special} value={special} onChange={() => setSpecial(state => state = !state)} />
            </div>
            <div className='pwd-input' style={{ color: 'blue' }}>
                <label htmlFor="allowedNumeric">Include Numbers </label>
                <input type="checkbox" id='allowedNumeric' defaultChecked={numeric} value={numeric} onChange={() => setNumeric(state => state = !state)} />
            </div>
            <div className='pwd-input' style={{ color: 'grey' }}>
                <label htmlFor="range">Password Length</label>
                <input type="range" id='range' placeholder='enter password length' value={length} min={4} max={12} onChange={(e) => setLength(e.target.value)} />{length}

            </div>

        </div>
            <div>
                <button className='pwd-button' onClick={() => onGeneratePasswordClick()}>Generate Password</button>
            </div>
            {password && <h1>{password}</h1>}
        </>
    )
}

export default PasswordGenerate
