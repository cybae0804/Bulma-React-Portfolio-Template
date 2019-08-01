import React, { Component } from 'react';
import { about } from '../../configs';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="Footer">
        <div className="iconsContainer">
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <i className="fab fa-github fa-2x colorWhite"></i>
            </span>
          </a>
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <i className="fab fa-linkedin fa-2x colorWhite" ></i>            
            </span>
          </a>
          <a
            href='/resume.pdf'
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-large">
              <i className="fas fa-file fa-2x colorWhite"></i>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
