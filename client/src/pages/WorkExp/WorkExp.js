import React from 'react';
import { SiReact } from "react-icons/si";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './WorkExp.css';
const WorkExp = () => {
    return (
        <>
            <div className="work" id='work'>
                <div className="container work-exp">
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work  Experience</h2>
                    <hr />
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2023-Present"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Frontend Developer Trainig</h3>
                            <h4 className="vertical-timeline-element-subtitle">Under the guidance of SDE at Amazon</h4>
                            <p>
                                Designed and developed complete end to end employee
                                management software with 4 features. 
                                <br />
                                Worked on Single page architecture using React JS.
                                Learned about code optimization & code refactoring
                                techniques.
                                <br />
                                Implemented multiple react concepts in the projects, like
                                State management, Conditional Rendering ,Hooks,
                                Redux, Context API & Router.
                                <br />
                                Designed APIs using Node JS with express.
                                <br />
                                Learned about SQL and its queries using MySQL
                                database.
                            </p>
                        </VerticalTimelineElement>
                       {/*  <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2023-Present"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Frontend Developer Trainig</h3>
                            <h4 className="vertical-timeline-element-subtitle">Under the guidance of SDE at Amazon</h4>
                            <p>
                                Designed and developed complete end to end employee
                                management software with 4 features. 
                                <br />
                                Worked on Single page architecture using React JS.
                                Learned about code optimization & code refactoring
                                techniques.
                                <br />
                                Implemented multiple react concepts in the projects, like
                                State management, Conditional Rendering ,Hooks,
                                Redux, Context API & Router.
                                <br />
                                Designed APIs using Node JS with express.
                                <br />
                                Learned about SQL and its queries using MySQL
                                database.
                            </p>
                        </VerticalTimelineElement> */}
                       {/*  <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2023-Present"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">XYZ Pvt. Ltd.</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement> */}
                    </VerticalTimeline>
                </div>
            </div>

        </>
    );
}

export default WorkExp;
