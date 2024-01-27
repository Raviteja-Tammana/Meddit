import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = props => {
    return (
        <ul className='nav-links'>
            <li className='login'>
                <NavLink to="/auth">LOG IN</NavLink>
            </li>
        </ul>
    )
    

}

export default NavLinks;