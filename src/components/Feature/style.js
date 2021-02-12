import styled from 'styled-components'
import FeatureImg from '../../images/featured3.jpg'

export const FeatureContainer = styled.div `
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)) , url(${FeatureImg});
height:100vh;
/* max-height:500px; */
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;
/* text-align:center; */
/* padding:0 1rem; */

h1{
    font-size: 60px;
    @media screen and (max-width:570px) {
    font-size: 45px;
}
@media screen and (max-width:355px) {
    font-size: 26px;
}
}
p{
    margin-bottom: 1rem;
    font-size: 20px;

    @media screen and (max-width:880px) {
    font-size: 17px;
    margin: 30px;
    }
    @media screen and (max-width:570px) {
    font-size: 16px;
    margin: 30px;
    }
    @media screen and (max-width:355px) {
    font-size: 16px;
    margin: 30px;
}
}

`
export const FeatureBtn = styled.button `
font-size:1.4rem;
padding:.6rem 3rem;
border: none;
color:#000;
background:#ffc500;

&:hover {
    background: #e31837;
    cursor: pointer;
    transition: .2s ease-out;
    color:#fff;
}
`