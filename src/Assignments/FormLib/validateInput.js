const validateInput = (inputState, props) => {
    let errors = new Set();
    validateRequired(inputState, props,errors);
    validateMinLength(inputState, props,errors);
    validateMinValue(inputState, props,errors);
    validateMaxValue(inputState, props,errors);
    return Array.from(errors).filter(err => err !== '');
}


const validateRequired = (inputState, props,errors) => {
    let error= ''
    if (props.required && inputState.value == '') {
        error = `${props.name} is required`;
        errors.add(error);
    } else {
        errors.delete(error);
    }
}

const validateMinLength = (inputState, props,errors) => {
    let error = '';
    if (props.minLength && String(inputState.value).length < props.minLength) {
        error = `${props.name} should have at least ${props.minLength} character`;
        errors.add(error);
    } else {
        errors.delete(error);
    }
}

const validateMinValue= (inputState, props,errors) => {
    let error = '';
    if (props.type == 'number' && props.min && Number(inputState.value) < props.min) {
        error = `value should be greater than or equal to ${props.min}`;
        errors.add(error);
    } else {
        errors.delete(error);
    }
}

const validateMaxValue= (inputState, props,errors) => {
    let error = '';
    if (props.type == 'number' && props.max && Number(inputState.value) > props.max) {
        error = `value should be less than or equal to ${props.max}`;
        errors.add(error);
    } else {
        errors.delete(error);
    }
}

export default validateInput;