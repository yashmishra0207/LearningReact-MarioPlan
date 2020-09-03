import React from 'react'
import { NavLink } from 'react-router-dom'

function SignInLinks() {
    return (
        <div>
            <li>
                <NavLink to='/'>New Project</NavLink>
            </li>
            <li>
                <NavLink to='/'>Log Out</NavLink>
            </li>
            <li>
                <NavLink to='/'></NavLink>
            </li>
        </div>
    )
}

export default SignInLinks
