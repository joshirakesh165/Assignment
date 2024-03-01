import React, { useEffect } from 'react'
import changeStringCodeToHTML from './stringToCodeConverter'
import { useRef } from 'react'
import './code-viewer.css'

const CodeViewer = (props) => {
    const codeRef = useRef()
    const HTMLcode = changeStringCodeToHTML(props.codeInStringForm)

    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.innerHTML = HTMLcode;
        }
      }, []);

      const copyCode = () => {
        navigator.clipboard.writeText(props.codeInStringForm);
        alert('Code copied !')
      }
    return (
        <div className='code-viewere'>
            <span className='copy-clipboard' onClick={copyCode}>Copy Code <img src="/copy.svg" alt="" /></span>
            <pre>
                <code ref={codeRef}>
                </code>
            </pre>
        </div>
    )
}

export default CodeViewer
