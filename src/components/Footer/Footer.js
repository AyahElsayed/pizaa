import React from 'react'
import { FooterContainer, FooterIcon, FooterSocialIcons, FooterSocialLogo, FooterSocialmedia } from './style'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, } from 'react-icons/fa'
function Footer() {
    return (
        <FooterContainer>
                <FooterSocialLogo>pizza</FooterSocialLogo>
                <FooterSocialIcons>
                    <FooterIcon href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook/>
                    </FooterIcon>
                    <FooterIcon href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram/>
                    </FooterIcon>
                    <FooterIcon href='/' target='_blank' aria-label='Twiter'>
                        <FaTwitter/>
                    </FooterIcon>
                    <FooterIcon href='/' target='_blank' aria-label='YouTube'>
                        <FaYoutube/>
                    </FooterIcon>
            </FooterSocialIcons>
        </FooterContainer>
    )
}

export default Footer
