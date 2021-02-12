import styled from 'styled-components'
import {NavLink as Link } from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
font-weight: 700;
justify-content: center;
`
export const NavLink = styled(Link)`
font-size: 2rem;
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 460px){
    position:absolute;
    top:10px;
    left: 25px;
    font-size: 1rem;
}


`
export const NavIcon = styled.div `
display: block;
position: absolute;
top:0;
right: 0;
cursor: pointer;
color: #fff;

p {
    transform: translate(-182%,125%);
    font-weight: bold;
    font-size: 20px;

    @media screen and (max-width:311px) {
    font-size: 15px;
    transform: translate(-107%,115%);
}
}
`
export const Bars = styled(FaPizzaSlice) `
font-size: 2rem;
transform: translate(-79%,-2%);

@media screen and (max-width:311px) {
    font-size: 23px;
    transform: translate(31%,6%);
}


`

