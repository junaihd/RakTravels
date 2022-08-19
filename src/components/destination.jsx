import React from 'react';
import destination from './images/marker.svg';

function Destination() {
  return (
    <section className="destination" id='destination'>
        <div className="destination_header">
            <h2 className="dest_head">DISCOVER THE FAMOUS DESTINATIONS</h2>
        </div>
        <div className="destination_wrapper">
            <div className="destination_card dubai">
              <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">UAE</p>
              </div>
            </div>
            <div className="destination_card saudi">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">Saudi Arabia</p>
              </div>
            </div>
            <div className="destination_card qatar">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">Qatar</p>
              </div>
            </div>
            <div className="destination_card kuwait">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">Kuwait</p>
              </div>
            </div>
              <div className="destination_card oman">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">Oman</p>
              </div>
            </div>
            <div className="destination_card bahrain">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">Bahrain</p>
              </div>
            </div>
            <div className="destination_card uk">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">UK</p>
              </div>
            </div>
            <div className="destination_card usa">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">USA</p>
              </div>
            </div>
            <div className="destination_card malasia">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">Malasia</p>
              </div>
            </div>
            <div className="destination_card singapore">
            <div className="destination_detail">
                <img src={destination} alt="dest_logo" className="dest_logo" />
                <p className="dest_name">Singapore</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Destination;
