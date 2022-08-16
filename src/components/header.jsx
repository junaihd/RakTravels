import React from 'react';
import headerImage from './images/header-image.jpg';
import { useState, useEffect, useRef } from 'react';
import logo from './images/logo_Rak.png';
import menu from './images/menu-burger.svg';
import close from './images/cross.svg';

import { Link } from 'react-scroll';

function Header() {
  
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, [])
  const inputRef = useRef(null);
  const toggleNav = () => {
    setToggle(!toggle)
  }
  return (
    <header>
        <nav>
         <div className="brand"><img src={logo} alt="" className="logo" /><img onClick={toggleNav} src={menu} alt="" className="menu_icon" /></div>
        {( toggle || screenWidth > 600 )&& (<div className="nav_menu">
            <div className="close"><img onClick={toggleNav} src={close} alt="" className="close-btn" /></div>
          <ul>
            <Link to='getaquote' smooth={true}><li onClick={toggleNav} >Get a quote</li></Link>
            <Link to='services' smooth={true}><li onClick={toggleNav} >Services</li></Link>
            <Link to='destination' smooth={true}><li onClick={toggleNav} >Destinations</li></Link>
            <Link to='contact' smooth={true}><li onClick={toggleNav} >Contact</li></Link>
        </ul>  
        </div>
        )}
    </nav>
        <section className="header_section">
          <main className="header_content">
            <h1 className="main_header_content">PLAN YOUR TRIP WITH RAK</h1>
            <p className="sub_header_content">Buy Tickets, Visa, Tour packages, Hotel booking and more. Rak tours and travels in Edappal and Vattamkulam offers a varieties of travel services across the world.</p>
            <div className="btn_div" ref={inputRef}>
              <Link className='btn_header service_btn' to='services' smooth={true}><button className="btn_header service_btn">SERVICE</button></Link>
              <Link className='btn_header contact_btn' to='contact' smooth={true}><button className="btn_header contact_btn">CONTACT</button></Link>
            </div>
          </main>
          <div className="header_pic">
            <img src={headerImage} alt="tickets" className="header_img" />
          </div>
        </section>
    </header>
  )
}

export default Header;
