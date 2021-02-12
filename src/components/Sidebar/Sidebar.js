import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenue, SidebarRoute, SideBtnWrap } from './style'

function Sidebar({isOpen , toggel}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggel} >
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenue>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenue>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
