import React from 'react';
import whatsapp from './images/whatsapp.svg';
import phone from './images/phone.svg';
import email from './images/email.svg';
import location from './images/location.svg';

function Contact() {
  return (
    <section className="contacts" id='contact'>
        <div className="contact_header">
            <h2 className="contact_head">GET IN TOUCH WITH US</h2>
        </div>
        <div className="contact_card">
            <a className="contact" href='tel:+919995672767' title='Phone'>
                <img src={phone} alt="phone" className="contact_img" />
                <h6 className="contact_name">PHONE</h6>
                <p className="contact_content">+919995672767</p>
                <p className="contact_content">0494 2083914</p>
            </a>
            <a className="contact" href='mailto:raktravels.in@gmail.com' title='Email'>
                <img src={email} alt="email" className="contact_img" />
                <h6 className="contact_name">E-MAIL</h6>
                <p className="contact_content">raktravels.in@gmail.com</p>
            </a>
            <a className="contact" href='https://wa.me/+919947611114' title='Whatsapp'>
                <img src={whatsapp} alt="whatsapp" className="contact_img" />
                <h6 className="contact_name">WHATSAPP</h6>
                <p className="contact_content">+919947611113</p>
            </a>
            <a className="contact" href='https://goo.gl/maps/Mv2dk2PB1LzwcrgK9' title='Location'>
                <img src={location} alt="location" className="contact_img" />
                <h6 className="contact_name">LOCATION</h6>
                <p className="contact_content">MPS Building 1st Floor, Vattamkulam</p>
            </a>
        </div>
    </section>
  )
}

export default Contact;
