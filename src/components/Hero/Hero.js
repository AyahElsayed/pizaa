import React, {useState}  from 'react'
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './style'
import Navbar from "../Navbar/Navbar";
import Sidebar from '../Sidebar/Sidebar';

function Hero() {
    const [isOpen, setisOpen] = useState(false)
    const toggel = () => {
        setisOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggel={toggel} />
            <Sidebar isOpen={isOpen} toggel={toggel} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Gratest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
