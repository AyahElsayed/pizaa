import styled from 'styled-components'
import Imgbg from '../../images/pizza-3.jpg'

export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)) , url(${Imgbg});
height:100vh;
background-position: center;
background-size: cover;
`
export const HeroContent = styled.div`
/* background:#fff; */
height: calc(100vh - 80px);  // all view - navbar
max-height: 100%;
width: 100vw;
padding: 5px 100px;
`
export const HeroItems = styled.div`
/* background:red; */
display: flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height: 100vh;
max-height:100%;
padding: 0 2rem;
width:650px;
text-transform: uppercase;
line-height:38px;
font-weight:bold;
color:#fff;

@media screen and (max-width:650px) {
    width:100%;
}
`
export const HeroH1 = styled.h1`
/* font-size: clamp(2.5rem, 10vw, 5rem);  */
// 2.5 > min , 5 max to responsive without media but not supported
font-size: 6vw;
line-height: 73.5px;
margin-bottom: 1rem;
box-shadow: 3px 5px #e9ba23;
letter-spacing: 3px;

@media screen and (max-width:453px) {
    line-height: 49.5px;
}

@media screen and (max-width:300px) {
    line-height: 25.5px;
}
`
export const HeroP = styled.p`
font-size: 3vw;
margin-bottom: 2rem;

@media screen and (max-width:300px) {
    line-height: 19px;
    font-size: 13px;
    margin-bottom: 12px;
}

`
export const HeroBtn = styled.button`
font-size: 1.5rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: .2s ease-out;

&:hover {
    background: #ffc500;
    cursor: pointer;
    transition: .2s ease-out;
    color:#000
}

@media screen and (max-width:300px) {
    font-size: 15px;
    padding: 7px 12px;
}
`