import React from 'react';
import './Projects.css'
import Spin from 'react-reveal/Spin';
const Projects = () => {
    return (
        <>
            <div className="container project" id='projects'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top Recent projects</h2>
                <hr />
                <p className='pb-3 text-center'>👉
                    Check out my latest projects, where I've applied my skills to create impactful solutions and deliver successful outcomes.
                </p>

                <div className="row" id="ads">
                    <Spin>
                        <div className="col-md-4 mt-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">FullStack</span>
                                    <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Ecommerce Website</h5>
                                    </div>
                                    <a href="https://github.com/Raaz902/E-Commerce-App-MERN" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">FullStack</span>
                                    <img src="https://s3.amazonaws.com/ionic-marketplace/todo-app-theme/icon.png" alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Basic To-Do Application</h5>
                                    </div>
                                    <a href="https://github.com/Raaz902/To-Do-Application-MERN" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Frontend</span>
                                    <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBX6kD5_A2aQRnTToPZ_Z9ahKh9wiOOywaasmFfqLB3dm4pu45uI7OfdssZfmqRSOYSgyuD7PB8B4gYHmGS_kqI4-&format=source" alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>
                                    <span className="card-detail-badge">CSS</span>
                                    <span className="card-detail-badge">ReactJS</span>

                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Online Examination System</h5>
                                    </div>
                                    <a href="https://github.com/Raaz902/Online-Examination-System" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Frontend</span>
                                    <img src="https://www.shutterstock.com/image-vector/initial-letter-d-line-logo-260nw-2150751695.jpg" alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>
                                    <span className="card-detail-badge">CSS</span>
                                    <span className="card-detail-badge">ReactJS</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Employee-Data-Management-System-2</h5>
                                    </div>
                                    <a href="https://github.com/Raaz902/Employee-Data-Management-System-2" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Frontend</span>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_PrxWmQnHOpSYNerI4JQBUF9T2NqwApKQA&usqp=CAU" alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>
                                    <span className="card-detail-badge">CSS</span>
                                    <span className="card-detail-badge">JavaScript</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Employee-Data-Management-System-1</h5>
                                    </div>
                                    <a href="https://github.com/Raaz902/Employee-Data-Management-System-1" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
                    </Spin>
                </div>
            </div>
        </>
    );
}

export default Projects;
