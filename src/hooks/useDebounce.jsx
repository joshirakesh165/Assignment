import React, { useState } from 'react'

const useDebounce = ( debounceCallback, delay = 1000) => {
    let [timer, setTimer] = useState();

    const withDebounce = (input) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            debounceCallback(input);
        }, delay)
        setTimer(timer)
    }
    return withDebounce ;
}

export default useDebounce
