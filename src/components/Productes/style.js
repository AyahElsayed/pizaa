import styled from 'styled-components'

export const ProductContainer = styled.div`
width:100vw;
min-height:100vh;
padding: 5rem;
background:#150f0f;
color:#fff;
`
export const ProductHeading = styled.h1`
font-size:2.5rem;
text-align:center;
margin-bottom:5rem;
`
export const ProductItems = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;
`
export const ProductCard = styled.div`
margin:0 2rem;
line-height:2;
width:300px;
`
export const ProductImg = styled.img`
height:300px;
min-width:300px;
max-width: 100%;
box-shadow:8px 8px #fdc500;
`
export const ProductInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;
`
export const ProductTiltle = styled.h2`
font-weight:400;
font-size:1.5rem;
`
export const ProductDesc = styled.p`
margin-bottom:1rem;
height: 170px;
`
export const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
`
export const ProductBtn = styled.button`
font-size:1rem;
padding:1rem 4rem;
border:none;
color:#fff;
background:#e31837;

&:hover{
    background:#ffc500;
    cursor: pointer;
    color:#000;
}
`