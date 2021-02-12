import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './style'
function Navbar({toggel}) {
    return (
        <div>
            <Nav>
                <NavLink to='/'>pizaaa</NavLink>
                <NavIcon onClick={toggel}>
                    <p>Menue</p>
                    <Bars></Bars>
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar
