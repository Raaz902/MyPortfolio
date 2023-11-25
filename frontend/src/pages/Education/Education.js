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
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
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
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

        </>
    );
}

export default Education;