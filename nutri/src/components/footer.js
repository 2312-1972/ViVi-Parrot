import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaEnvelope, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
             <div className='a '>
        <Link className='fa'  to={''} aria-label="Youtube" style={{ fontSize: '26px' }}>
          <span className="sr-only fa"></span>
          <FaYoutube />
        </Link>         
       <Link className='fa'   to={''} aria-label="Instagram" style={{ fontSize: '26px' }}>
          <span className="sr-only"></span>
          <FaInstagram />
        </Link>
        <Link className='fa'  to={''} aria-label="Tiktok" style={{ fontSize: '26px' }}>
          <span className="sr-only"></span>
          <FaTiktok />
        </Link>
        <Link className='fa'  to={''} aria-label="Facebook" style={{ fontSize: '26px' }}>
          <span className="sr-only"></span>
          <FaFacebook />
        </Link>
        <Link className='fa'  to={''} aria-label="LinkedIn" style={{ fontSize: '26px' }}>
          <span className="sr-only"></span>
          <FaLinkedin />
        </Link>
        <Link className='fa'  to={'./contact'} aria-label="Contact" style={{ fontSize: '26px' }}>
          <span className="sr-only"></span>
          <FaEnvelope />
        </Link>
      </div>
          <Link><p>&copy; 2024 The art of code</p> </Link>
        </footer>
    );
}

export default Footer;
