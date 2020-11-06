import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    // FaLinkedIn
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterWrap,
    FooterLinksWrapper,
    SocialMedia,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos </FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us </FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >
                            dolla
                        </SocialLogo>
    <WebsiteRights>dolla @ {new Date().getFullYear()}
    All rights reserved</WebsiteRights>
    <SocialIcons>
        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
            <FaFacebook/>
        </SocialIconLink>
        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
            <FaInstagram/>
        </SocialIconLink>
        <SocialIconLink href='/' target="_blank" aria-label="Youtube">
            <FaYoutube/>
        </SocialIconLink>
        <SocialIconLink href='//' target="_blank" aria-label="Twitter">
            <FaTwitter/>
        </SocialIconLink>
        <SocialIconLink href='/' target="_blank" aria-label="LinkedIn   ">
            {/* <FaLinkedin   /> */}
        </SocialIconLink>
    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
