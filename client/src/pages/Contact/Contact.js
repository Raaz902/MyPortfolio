import React from 'react';
import { useRef } from 'react'; //change-1
import emailjs from '@emailjs/browser';
import './Contact.css'
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    const form = useRef() //change-2
    const sendEmail = (e) => {//change-3 (whole function, from line 12 to 22)
        e.preventDefault();

        emailjs.sendForm('service_yw5wwhw', 'template_0f4c0fk', form.current, 'Z4X7Z2z8wD-0mQDez')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
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
                                <div className="card2 d-flex card border-0 px-4 py-5 ">
                                    <div className="row">
                                        <div className="row px-3">
                                            <h6 className='mx-4'>Contact with
                                                <a href="https://www.linkedin.com/in/mohammad-raaz-b31a531b1/"><BsLinkedin size={28} className='ms-2' color='#0377fc' /></a>
                                                <a href="https://github.com/Raaz902"><BsGithub size={28} className='ms-2' color='#000' /></a>
                                                <a href="https://www.facebook.com/mohdraaz.raaz.98"><BsFacebook size={28} className='ms-2' color='#0377fc' /></a>
                                                <a href="https://api.whatsapp.com/send?phone=+919750916786"><FaWhatsappSquare size={28} className='ms-2' color='#075E54' /></a>

                                            </h6>
                                        </div>

                                        <form className="row px-3 mb-4 mx-1" ref={form} onSubmit={sendEmail}> 
                                       {/*   //change-4  (here only "ref={form} onSubmit={sendEmail}" portion is added as new funtionality for sending the email) and the value of 'name' attribute(for e.g: name="user_name") of each input does matters because the value of "name" is set as a variable in the templete of email at emailjs.com website  */}
                                            <div className="line" />
                                            <small className="or text-center">OR</small>
                                            <div className="line" />
                                            <div className="row px-3">
                                                <input type="text" name='user_name' placeholder='Enter your Name' className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <input type="email" name='user_email' placeholder='Enter your Email' className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <input type="text" name='Subject' placeholder='Enter Subject' className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <textarea type="text" name='message' placeholder='Enter your Message' className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <button className='button' type="submit" >Send Message</button>
                                            </div>
                                        </form>
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
