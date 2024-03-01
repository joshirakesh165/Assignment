import React, { forwardRef, useEffect, useState } from 'react'
import validateInput from '../validateInput';
import './input.css';


const Input = forwardRef((props, ref) => {
    let initialState = { value: props.defaultValue || '', name: '', touched: false, status: 'VALID', errors: [] };
    let propsTopas = { ...props };
    delete propsTopas.defaultValue;
    delete propsTopas.validateFromParent;
    delete propsTopas.children;
    delete propsTopas.leftIcon;
    delete propsTopas.rightIcon;
    delete propsTopas.updateParentState;
    delete propsTopas.showLabel;
    delete propsTopas.showError;

    if (props.defaultValue || props.defaultValue == 0) {
        initialState = {
            ...initialState,
            value: props.defaultValue,
            name: props.name
        }
    }
    const [inputState, setInputState] = useState({ ...initialState, name: props.name });

    const onInputChange = (e) => {
        let inputErrors = validateInput({ ...inputState, value: e.target.value }, props)
        let stateToUpdate = {
            ...inputState,
            value: e.target.value,
            status: inputErrors.length == 0 ? 'VALID' : 'INVALID',
            errors: inputErrors
        }
        setInputState(stateToUpdate)
        if (props.onChange) {
            props?.onChange(e, stateToUpdate);
        }
    }

    const onInputFocus = (e) => {
        let stateToUpdate = { ...inputState, touched: true }
        setInputState(stateToUpdate);
        if (props.onFocus) {
            props?.onFocus(e, stateToUpdate);
        }
    }
    const onInputBlur = (e) => {
        let inputErrors = validateInput(inputState, props)
        let stateToUpdate = {
            ...inputState,
            status: inputErrors.length == 0 ? 'VALID' : 'INVALID',
            errors: inputErrors
        }
        setInputState(stateToUpdate)
        if (props.onBlur) {
            props?.onBlur(e, stateToUpdate);
        }
        if (props?.updateParentState) {
            props?.updateParentState(stateToUpdate)
        }
    }

    useEffect(() => {
        if (props.validateFromParent) {
            let inputErrors = validateInput(inputState, props)
            if (inputErrors && inputErrors.length > 0) {
                let stateToUpdate = {
                    ...inputState,
                    status: inputErrors.length == 0 ? 'VALID' : 'INVALID',
                    errors: inputErrors
                }
                setInputState(stateToUpdate);
                if (props?.updateParentState) {
                    props?.updateParentState(stateToUpdate)
                }
            }
        }
    }, [props.validateFromParent])
    return (
        <div className='rj-form-control'>
            {props.showLabel != false && <label htmlFor={props.name} className='rj-form-control-label'>
                <span>{props.label}</span>
                {props.required && <span className='rj-form-control-start invalid'>*</span>}
            </label>}
            {props.leftIcon}
            <input autoComplete="off"
                ref={ref}
                value={inputState.value}
                className='rj-form-control-input'
                {...propsTopas}
                onChange={onInputChange}
                onFocus={onInputFocus}
                onBlur={onInputBlur} />
            {props.rightIcon}
            {props.showError != false && <span className='rj-form-control-error invalid'>
                {inputState.status == 'INVALID' ? inputState?.errors?.[0] : ''}
            </span>}
        </div>
    )
})

export default Input
