import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Lauout = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const cssMap ={
        'Form Control' :'fc',
        'Polyfill':'polyfill',
        'hook' :'hook'
    }


    const assignments = [ 
        {
            name: 'i-scroll',
            title: 'Infinite Scrolling',
            date: '',
        },
        {
            name: 'v-scroll',
            title: 'Virtual Scrolling',
            date: '',
        },
        {
            name: 'password-generator',
            title: 'Password generator',
            date: '',
        },
        {
            name: 'explorer',
            title: 'File explorer',
            date: '',
        },
        {
            name: 'post',
            title: 'Infinite Post Comment',
            date: '',
        },
        
        {
            name: 'rj-input',
            title: 'Custom Input with validation',
            date: '',
            type:'Form Control'
        },
        {
            name: 'rj-select',
            title: 'Custom dropdown with filter',
            date: '',
            type:'Form Control'
        },
        {
            name: 'rj-multiselect',
            title: 'Multiselect ',
            date: '',
            type:'Form Control'
        },
        {
            name: 'autocomplete',
            title: 'Auto Complete',
            date: '',
            type:'Form Control'
        },
        {
            name: 'rj-chips',
            title: 'Chips component for form',
            date: '',
            type:'Form Control'
        },
        {
            name: 'custom-promise-code',
            title: 'Code for Custom Promise',
            date: '',
            type:'Polyfill'
        },
        {
            name: 'promise-all',
            title: 'Code  for Promise All ',
            date: '',
            type:'Polyfill'
        },
        {
            name: 'array-polyfill',
            title: 'Polyfill for Array and other ',
            date: '',
            type:'Polyfill'
        },
        {
            name: 'use-click-outside',
            title: 'Hook for detecting out click',
            date: '',
            type:'Hook'
        },
    ];

    const navigateClick = (assignment) => {
        navigate(`/assignment/${assignment.name}`, {
            state: {
                assignment: { ...assignment }
            }
        });
    }


    return (
        <>{location.pathname == '/' && <div className='card-wrapper'>
            {assignments.map((assignment, index) => (
                <div key={index} onClick={_ => navigateClick(assignment)}>
                    <div className={`assignmnet-card ${cssMap[assignment.type]}`}>
                        <h3 className='assignment-title'>{assignment.title}</h3>
                        <div className="ribbon-1">{assignment.type}</div>
                    </div>
                </div>
            ))}
        </div>}
            <Outlet ></Outlet>
        </>
    )
}

export default Lauout
