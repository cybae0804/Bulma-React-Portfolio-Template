import React, { Component } from 'react';
import { projects } from '../../configs';
import './Projects.css';

class Projects extends Component {
  generateProjectsPanel = () => {
    return projects.map((project, index) => {
      const { name, desc, image, demo, source } = project;

      return (<div className="column" key={index} >
        <div className="mCard shadow cardOverride">
          <div className="mCard-image" style={{ display: 'flex' }}>
            <div
              style={{
                flex: '1 1 auto',
                minWidth: 400,
                minHeight: 400,
                backgroundImage: `url(${image}`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <span className="mCard-title">{name}</span>
          </div>
          <div className="mCard-content" style={{ flex: '1 1 auto' }}>
            <p>{desc}</p>
          </div>
          <div className="mCard-action iconsContainer">
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon is-large">
                <i className="fab fa-github fa-lg colorBlack"></i>
              </span>
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon is-large">
                <i className="fas fa-laptop-code fa-lg colorBlack" ></i>            
              </span>
            </a>
          </div>
        </div>
      </div>);
    })
  }

  render() {
    return (
      <div id="Projects">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Projects</h1>
              <div className="content columns">
                {this.generateProjectsPanel()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
