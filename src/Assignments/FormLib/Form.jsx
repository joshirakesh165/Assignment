import React, { useState } from 'react'
import Input from './Input/Input'
import Dropdown from './Select/Dropdown';
import Chips from './Chips/Chips';

const Form = () => {
    const [validateFromParent, setValidateFromParent] = useState(false);
    const [form, setForm] = useState({});


    const options = [
        { label: 'option 1', value: 'option 1' },
        { label: 'option 2', value: 'option 2' },
        { label: 'option 3', value: 'option 3' },
        { label: 'option 4', value: 'option 4' }
    ]

    const onSubmitClick = (e) => {
        e.preventDefault();
        setValidateFromParent(true);
        console.log(form)
    }

    const updateParentState = (field) => {
        let formValue = { ...form, [field.name]: field }
        setForm(formValue);
    }
    return (
        <form onSubmit={onSubmitClick}>
            <Input
                type="text"
                name="name"
                label="Name"
                required="true"
                defaultValue="tedt"
                placeholder="enter name"
                validateFromParent={validateFromParent}
                updateParentState={updateParentState}
                min={5}>
            </Input>
            <Dropdown options={options}
                required="true"
                onSelect={(e, option) => console.log(option)}
                 />
            <Chips />     
            <button type='submit'>Submit {form?.Name?.value}</button>

        </form>

    )
}

export default Form;