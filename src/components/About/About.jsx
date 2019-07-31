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
              <div className="content columns">
                <div className="column is-one-third">
                  <img src="https://picsum.photos/600/500" alt="Profile" />
                </div>
                <div className="column is-two-thirds longDescription">
                  {
                    about.longDesc.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
