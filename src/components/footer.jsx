import React from 'react';
import phone from './images/phone.svg';
import email from './images/email.svg';
import whatsapp from './images/whatsapp.svg';
import location from './images/location.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import telegram from './images/telegram.svg';

function Footer() {
  return (
    <footer>
        <main className='footer' id='getaquote'>
            <article className='footer_content'>
                <h1 className="footer_head">RAK</h1>
                <p className="footer_subhead">{`TOURS & TRAVELS`}</p>
                <p className="footer_para">Buy Tickets, Visa, Tour packages, Hotel booking and more. Rak tours and travels in Edappal and Vattamkulam offers a varieties of travel services across the world. All tour packages available in Rak tours and travels in Vattamkulam.</p>

                <div className="footer_contact">
                <a href="tel:+919995672767" title='phone'><img src={phone} alt="phone" className="footer_img" /></a>
                <a href="mailto:raktravels.in@gmail.com" title='email'><img src={email} alt="email" className="footer_img" /></a>
                <a href="https://wa.me/+919947611114" title='whatsapp'><img src={whatsapp} alt="whatsapp" className="footer_img" /></a>
                <a href="https://goo.gl/maps/Mv2dk2PB1LzwcrgK9" title='location'><img src={location} alt="location" className="footer_img" /></a>
            </div>
            </article>
            
            <div className="social_section">
                <h2 className="footer_service_head">SERVICES</h2>
                <div className="footer_services">
                    <p className="footer_serve tick">TICKETS</p>
                    <p className="footer_serve">VISIT VISA</p>
                    <p className="footer_serve">TOUR PACKAGES</p>
                    <p className="footer_serve tick">HOTEL BOOKING</p>
                    <p className="footer_serve">PASSPORT WORKS</p>
                </div>
                <div className="social_links">
                    <a href="https://www.facebook.com/raktravels.in" className="socials" title='facebook'><img src={facebook} alt="facebook" className="social_img" /></a>
                    <a href="https://www.instagram.com/rak_holidays/" className="socials" title='instagram'><img src={instagram} alt="instagram" className="social_img" /></a>
                    <a href="https://te.me/" className="socials" title='telegram'><img src={telegram} alt="telegram" className="social_img" /></a>
                    <a href="https://wa.me/+919947611114" className="socials" title='whatsapp'><img src={whatsapp} alt="whatsapp" className="social_img" /></a>
                </div>
            </div>
        </main>

    </footer>
  )
}

export default Footer;
