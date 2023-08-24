import React ,{ useRef } from "react";
import Cimage from "../media/logo2.jpg";
import "../Styles/contact.css";
import emailjs, { send } from '@emailjs/browser';

const Contact =()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w5cwlcx', 'template_yk86vbn', form.current, 'qjzowUpWzd-LiQGfq')
      .then((result) => {
          console.log(result.text);
          window.alert("message Sent");
      }, (error) => {
          console.log(error.text);
          window.alert("An error occured");
      });
  };
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${Cimage})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user-name">Full Name</label>
                    <input name="user-name" placeholder="Enter Full Name" type="text" required/>

                    <label htmlFor="user-email">Email</label>
                    <input name="user-email" placeholder="Email" type="email" required/>

                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter Message" name="message" required></textarea>
                    <button type="submit" value="send">Send Message</button>



                </form>
            </div>
        </div>
    )
}

export default Contact;