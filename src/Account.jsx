import React from 'react';
import './App.css';
import Popup from './Popup';

const Account = (props) => {
    return (<h1 className={'gridScreen'} onClick={() => props.showHidePopup(
        {
            content:'this is Account popup',
            title:'Account'
        }
        )} >
        Account
    </h1 >);
};
export default Account;
