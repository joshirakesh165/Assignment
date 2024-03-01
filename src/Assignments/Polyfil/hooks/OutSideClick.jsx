import React from 'react'
import CodeViewer from '../../CodeViewer/CodeViewer'

const codeString = `import { useEffect } from 'react'

const useClickOutSide = (ref, clickHandller) => {

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

    const handleClickOutSide = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            clickHandller();
        }
    }
}

export default useClickOutSide
`

const OutSideClick = () =>  <CodeViewer codeInStringForm={codeString} />
export default OutSideClick;

