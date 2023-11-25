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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi ipsum, dolorem eum molestias libero aspernatur reiciendis beatae id dolore ipsam eos ducimus minus asperiores nostrum nesciunt fugit! Ipsum, assumenda?
                                Similique modi a omnis, asperiores sunt accusantium voluptatibus dolore, vel, aliquam enim nisi! Eos omnis possimus sit incidunt, numquam temp
                                Illum repudiandae quos corporis necessitatibus quis dolorem ad excepturi soluta dolore facere perspiciatis distinctio nihil in.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    );
}

export default About;
