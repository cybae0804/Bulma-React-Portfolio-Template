import React, { Component } from 'react';
import { projects } from '../../configs';
import './Projects.css';

class Projects extends Component {
  generateProjectsPanel = () => {
    return projects.map((project, index) => {
      const { name, desc } = project;

      return (<div className="column" key={index} >
        <div className="card">
          <div className="card-image">
            <img src={'https://picsum.photos/800/600'} alt="Placeholder" />
          </div>
          <div className="card-header">
            <div className="card-header-title">
              {name}
            </div>
          </div>
          <div className="card-content">
            <div className="content">
              {desc}
            </div>
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
