import React from 'react';
import ticket from './images/ticket.svg';
import visa from './images/visa.svg';
import passport from './images/passport.svg';
import pack from './images/package.svg';
import hotel from './images/hotel.svg';
import stamp from './images/stamp.svg';
import certificate from './images/certificate.svg';
import train from './images/rail.svg';
import umrah from './images/umrah.svg';

function Services() {
  return (
    <section className="services" id='services'>
        <div className="service_header">
            <h2 className="service_head">WE SERVE YOU BETTER</h2>
        </div>
        <div className="service_wrapper">
            <div className="service_item first_item">
                <img src={ticket} alt="ticket" className="service_img" />
                <p className="service_txt">TICKETS</p>
            </div>
            <div className="service_item">
                <img src={visa} alt="visa" className="service_img" />
                <p className="service_txt">VISIT VISA</p>
            </div>
            <div className="service_item">
                <img src={passport} alt="passport" className="service_img" />
                <p className="service_txt">PASSPORT WORKS</p>
            </div>
            <div className="service_item">
                <img src={hotel} alt="hotel" className="service_img" />
                <p className="service_txt">HOTEL BOOKING</p>
            </div>
            <div className="service_item">
                <img src={pack} alt="pack" className="service_img" />
                <p className="service_txt">TOUR PACKAGES</p>
            </div>
            <div className="service_item">
                <img src={certificate} alt="pack" className="service_img" />
                <p className="service_txt">CERTIFICATE ATTEST</p>
            </div>
            <div className="service_item">
                <img src={stamp} alt="pack" className="service_img" />
                <p className="service_txt">VISA STAMPING</p>
            </div>
            <div className="service_item">
                <img src={train} alt="pack" className="service_img" />
                <p className="service_txt">TRAIN BOOKING</p>
            </div>
            <div className="service_item">
                <img src={umrah} alt="pack" className="service_img" />
                <p className="service_txt">HAJJ AND UMRAH</p>
            </div>
        </div>
    </section>
  )
}

export default Services;
