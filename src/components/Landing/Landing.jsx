import React, { Component } from 'react';
import { about } from '../../configs';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id="Landing">
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container">

              <h1 className="title">
                {`${about.firstName} ${about.lastName}`}
              </h1>
              <h2 className="subtitle">
                {about.shortDesc}
              </h2>

              <div className="quickLinks">
                <a className="button" href="#projects">
                  Projects
                </a>
                <a
                  className="button"
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  content="Resume"
                >
                  Resume
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
