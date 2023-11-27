import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import './Menus.css'

import { FcAbout, FcHome, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from 'react-icons/fc'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { IoColorFill } from 'react-icons/io5';

const Menus = ({ toggle }) => {
    return (
        <>
            {
                toggle ? (
                    <>
                        <Zoom>
                            <div className="navbar-profile-pic">
                                <img src="/raaz.jpg" alt="profile pic" />
                            </div>
                        </Zoom>
                        <p style={{ color: "white", textAlign: "center", fontFamily: "cursive" }}>Mohammad Raaz</p>
                        <Fade left>
                            <div className="nav-items ">
                                <div className="nav-item ">
                                    <div className="nav-link ">
                                        <Link to="home"
                                            /* activeClass="active" */
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={100}>
                                            <FcHome /> Home
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="about"
                                            /* activeClass="active" */
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={100}>
                                            <FcAbout /> About
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="education"
                                            /* activeClass="active" */
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={100}>
                                            <FcReadingEbook /> Education
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="techstack"
                                            /* activeClass="active" */
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={100}>
                                            <FcBiotech /> Tech Stack
                                        </Link>

                                    </div>
                                    <div className="nav-link">
                                        <Link to="projects"
                                            /* activeClass="active" */
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={100}>
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
                                            duration={100}>
                                            <FcPortraitMode /> Work Experience
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='contact'
                                            /* activeClass="active" */
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={100}>
                                            <FcBusinessContact /> Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </>
                ) : (
                    <>
                        <div className="nav-items ">
                            <div className="nav-item ">
                                <div className="nav-link ">
                                    <Link to="home"
                                        /* activeClass="active" */
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}>
                                        <FcHome />
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="about"
                                        /* activeClass="active" */
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}>
                                        <FcAbout />
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="education"
                                        /* activeClass="active" */
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}>
                                        <FcReadingEbook />
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="techstack"
                                        /* activeClass="active" */
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}>
                                        <FcBiotech />
                                    </Link>

                                </div>
                                <div className="nav-link">
                                    <Link to="projects"
                                        /* activeClass="active" */
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}>
                                        <FcVideoProjector />
                                    </Link>

                                </div>
                                {/* <div className="nav-link">
                                    <FcVoicePresentation /> Testimonial
                                </div> */}
                                <div className="nav-link">
                                    <Link to="workexp"
                                        /* activeClass="active" */
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}>
                                        <FcPortraitMode />
                                    </Link>

                                </div>
                                <div className="nav-link">
                                    <Link to="contact"
                                        /* activeClass="active" */
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}>
                                        <FcBusinessContact />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    );
}

export default Menus;
