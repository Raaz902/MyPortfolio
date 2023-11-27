import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';
import { MdSchool } from "react-icons/md";

const Education = () => {
    return (
        <>
            <div className="education" id='education'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Recent Educatoin</h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2019 - 2023"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">B-Tech</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mahatma Jyotiba Phule Rohilkhand University, Bareilly, UP, India</h4>
                        <p>
                            During my B-Tech program at Mahatma Jyotiba Phule Rohilkhand University, I focused on Computer Science & Information Technology, specially on web development. I successfully completed several projects, including Ecommerce website.
                        </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2017 - 2019"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Higher Secondary School</h3>
                        <h4 className="vertical-timeline-element-subtitle">SKL Bhanwati IC/Bareilly, UP, India</h4>
                        <p>
                            In my 12th class, I specialized in the Physics, Chemistry, and Mathematics (PCM) stream. I delved into the fundamental principles of physics, the intricacies of chemistry, and the analytical problem-solving skills of mathematics.
                        </p>

                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

        </>
    );
}

export default Education;
