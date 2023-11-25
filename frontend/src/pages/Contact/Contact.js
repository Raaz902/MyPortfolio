import React from 'react';
import './Contact.css'
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    return (
        <>
            <div className="contact" id='contact'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Contact</h2>
                <hr />
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6-col-xl-6 col-sm-12">
                            <Zoom>
                                <div className="card1">
                                    <div className="row boder-line">
                                        <img className='image' src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais" alt="contact-imgae" />
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                        <Rotate>
                            <div className="col-md-6 col-lg-6">
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row">
                                        <div className="row">
                                            <h6>Contact with
                                                <BsLinkedin size={28} className='ms-2' color='#0377fc' />
                                                <BsGithub size={28} className='ms-2' color='#000' />
                                                <BsFacebook size={28} className='ms-2' color='#0377fc' />
                                            </h6>
                                        </div>

                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className="or text-center">OR</small>
                                            <div className="line" />
                                            <div className="row px-3">
                                                <input type="text" name='name' placeholder='Enter your Name' className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <input type="email" name='name' placeholder='Enter your Email' className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <textarea type="text" name='msg' placeholder='Enter your Message' className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <button className='button' type="submit" >Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Rotate>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
