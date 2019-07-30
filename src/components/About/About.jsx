import React, { Component } from 'react';
import { about } from '../../configs';

import './About.css';

class About extends Component {
  render() {
    return (
      <div id="About">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{`About ${about.firstName}`}</h1>
              <div className="content">
                {
                  about.longDesc.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
