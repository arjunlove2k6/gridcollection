import React from 'react';
import './App.css';
import Popup from './Popup';

const Customer = (props) => {
    return (<h1 className={'gridScreen'} onClick={() => props.showHidePopup(
        {
            content:'this is Account popup',
            title:'Customer'
        }
        )} >
        Customer
    </h1 >);
};
export default Customer;
