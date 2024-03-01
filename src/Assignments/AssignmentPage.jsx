import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Input from './FormLib/Input/Input';
import Explorer from './Explorer/Explorer';
import Chips from './FormLib/Chips/Chips';
import VirtualScroll from './VirtualScroll/VirtualScroll';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll';
import PasswordGenerate from './PasswordGenerator/PasswordGenerate';
import PostWrapper from './Post/PostWrapper';
import AutocompleteDemo from './Demos/AutocompleteDemo';
import MultiSelectDemo from './Demos/MultiSelectDemo';
import ArrayPolyfill from './Demos/ArrayPolyfill';
import DropdownDemo from './Demos/DropdownDemo';
import CodeViewerDemo from './Demos/CodeViewerDemo'
import CodeViewerDemo2 from './Demos/CodeViewerDemo2';
import OutSideClick from './Polyfil/hooks/outSideClick';


const AssignmentPage = () => {
    const location = useLocation()
    let [UI, setUI] = useState('');

    const getComponent = () => {
        switch (location?.pathname) {
            case '/assignment/rj-input': {
                setUI(<Input
                    type="text"
                    name="name"
                    label="Name"
                    required={true}
                    defaultValue=""
                    placeholder="enter name"
                    min={5} />)
                break;
            };
            case '/assignment/i-scroll': {
                setUI(<InfiniteScroll />)
                break;
            };
            case '/assignment/v-scroll': {
                setUI(<VirtualScroll />)
                break;
            };
            case '/assignment/rj-select': {
                setUI(<DropdownDemo />)
                break;
            };
            case '/assignment/rj-chips': {
                setUI(<Chips />)
                break;
            };
            case '/assignment/explorer': {
                setUI(<Explorer />)
                break;
            };
            case '/assignment/password-generator': {
                setUI(<PasswordGenerate />)
                break;
            };
            case '/assignment/custom-promise-code': {
                setUI(<CodeViewerDemo2 />)
                break;
            };
            case '/assignment/post': {
                setUI(<PostWrapper />)
                break;
            };
            case '/assignment/autocomplete': {
                setUI(<AutocompleteDemo />)
                break;
            };
            case '/assignment/promise-all': {
                setUI(<CodeViewerDemo />)
                break;
            };
            case '/assignment/rj-multiselect': {
                setUI(<MultiSelectDemo />)
                break;
            };
            case '/assignment/array-polyfill': {
                setUI(<ArrayPolyfill />)
                break;
            };
            case '/assignment/use-click-outside': {
                setUI(<OutSideClick />)
                break;
            };
        }
    }

    useEffect(() => {
        getComponent()
    }, [])
    return <div>
        <h3>{location?.state?.assignment?.title}</h3>
        <>{UI}</>
    </div>;
}

export default AssignmentPage
