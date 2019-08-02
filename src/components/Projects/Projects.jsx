import React, { Component } from 'react';
import { projects } from '../../configs';
import './Projects.css';

class Projects extends Component {
  generateProjectsPanel = () => {
    return projects.map((project, index) => {
      const { name, desc } = project;

      return (<div className="column" key={index} >
        <div className="mCard shadow">
          <div className="mCard-image">
            <img src="https://picsum.photos/400/410" alt="nature"/>
            <span className="mCard-title">{name}</span>
          </div>
          <div class="mCard-content">
            <p>{desc}</p>
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
