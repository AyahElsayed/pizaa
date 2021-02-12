import styled from 'styled-components'

export const FooterContainer = styled.footer `
background: #0d0909;
height: 100px;
color:#fff;
font-size:20px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
export const FooterSocialLogo = styled.div `
font-size: 30px;
padding: 40px;
`
export const FooterSocialIcons = styled.div `
padding-top: 10px;
`
export const FooterIcon = styled.a `
margin:5px;
font-size:30px;
&:hover{
    color:#ffc500;
}
`