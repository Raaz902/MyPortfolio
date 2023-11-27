import React, { useState } from 'react';
import './MobileNav.css'
import { IoMenu } from "react-icons/io5";
import { FcAbout, FcHome, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from 'react-icons/fc'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { AiOutlineMenuFold } from "react-icons/ai";
const MobileNav = () => {
    const [open, setOpen] = useState(false);
    //handle open
    const handleOpen = () => {
        setOpen(!open);
    }
    function handleMenuClick() {
        setOpen(false)
    }
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ?
                        (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen} />)
                        : (<IoMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
                    <span className='mobile-nav-title'>My Portfolio App</span>
                </div>
                {open ? (<div className="mobile-nav-menu">
                    <div className="nav-items ">
                        <div className="nav-item ">
                            <div className="nav-link ">
                                <Link to="home"
                                    /* activeClass="active" */
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}>

                                    <FcHome /> Home
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="about"
                                    /* activeClass="active" */
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcAbout /> About
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="education"
                                    /* activeClass="active" */
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcReadingEbook /> Education
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="techstack"
                                    /* activeClass="active" */
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcBiotech /> Tech Stack
                                </Link>

                            </div>
                            <div className="nav-link">
                                <Link to="projects"
                                    /* activeClass="active" */
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcVideoProjector /> Projects
                                </Link>

                            </div>
                            {/* <div className="nav-link">
                                    <FcVoicePresentation /> Testimonial
                                </div> */}
                            <div className="nav-link">
                                <Link to="work"
                                    /* activeClass="active" */
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcPortraitMode /> Work Experience
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='contact'
                                    /* activeClass="active" */
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcBusinessContact /> Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>) : null}

            </div>
        </>
    );
}

export default MobileNav;
