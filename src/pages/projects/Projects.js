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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae non dolorum enim expedita quo.
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
                                    <a href="#" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">FullStack</span>
                                    <img src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE=" alt="project1" />
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
                                    <a href="#" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
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
                                    <a href="#" className='ad-btn'>view</a>
                                </div>
                            </div>
                        </div>
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
                                    <a href="#" className='ad-btn'>view</a>
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
