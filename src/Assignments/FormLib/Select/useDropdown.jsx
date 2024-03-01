import { useState } from "react";

const useDropDown = (options, onSelect,defaultValue, inputRef) => {
    let emptyItem = {
        label: 'Select',
        value: null
    }
    const [isopen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue );
    const [ddOptions, setDdOptions] = useState([ ...options]);

    const onFilterChange = (e) => {
        let newOptions = options.filter(opt => opt.label.toLowerCase().includes(e.target.value.toLowerCase()))
        setDdOptions(newOptions);
    }

    const onClickOption = (e, option) => {
        setSelectedItem({ ...option })
        if (onSelect) {
            onSelect(e, option);
        }
        closeDropDown();
    }

    const openDropDown = () => {
        inputRef?.current?.focus();
        setIsOpen(state => state = true)
    };

    const closeDropDown = () => {
        setIsOpen(state => state = false)
    };

    const toggleDropDown = () => isopen ? closeDropDown() : openDropDown();
    return {
        isopen,
        selectedItem,
        openDropDown,
        closeDropDown,
        toggleDropDown,
        onClickOption,
        onFilterChange,
        ddOptions
    }
}

export default useDropDown;