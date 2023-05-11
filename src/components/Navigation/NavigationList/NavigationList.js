import React from 'react';
import {NavLink} from 'react-router-dom';

function NavigationList() {
    return (
        <ul>
            <li><NavLink to={'/'}>Homepage</NavLink></li>
            <li><NavLink to={'/profile'}>Profile</NavLink></li>
            <li><NavLink to={'/users'}>Users List</NavLink></li>
        </ul>
    );
}

export default NavigationList;