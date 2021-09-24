import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
        <NavLink className='headerHome' exact to='/'>Home</NavLink>
        </header>
    )
}
