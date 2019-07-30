import React, { Component } from 'react';
import { about } from '../../configs';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id="Home">
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container">

              <h1 className="title">
                {`${about.firstName} ${about.lastName}`}
              </h1>
              <h2 className="subtitle">
                {about.shortDesc}
              </h2>

              <div className="field is-grouped">
                <a
                  className="button"
                  href="#projects"
                  style={{ marginRight: '0.5rem' }}
                >
                  Projects
                </a>
                <a
                  className="button"
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
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
