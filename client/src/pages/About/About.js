import React from 'react';
import './About.css'
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id='about'>
                    <div className="row">
                        <div className="col-md 6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src="/raaz.jpg" alt="profile pic" />
                        </div>
                        <div className="col-md 6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About me</h1>
                            <p> My name is Mohammad Raaz from Bareilly, UP, India. I have completed my B-Tech from MJP Rohilkhand University,Bareilly. I am focused on Full Stack Web development utilizing MERN technology.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    );
}

export default About;
