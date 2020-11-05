import React, {useState}from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroP,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper,
    HeroHI
} from './HeroElements'
import {Button} from '../ButtonElements'

// pixels video for videos
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video.mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroHI>Virtual Banking Made Easy</HeroHI>
                <HeroP>
                    Sign up for a new account today and receive $250 in next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
