import React, { Component } from 'react';
import { skills } from '../../configs';
import './Skills.css';

class Skills extends Component {
  generateSkillsGrid() {
    const rows = [];

    for (let i = 0; i < skills.length; i += 4) {
      rows.push(<div className="columns" key={i}>
        {
          (() => {
            const columns = [];

            for (let j = i; j < i + 4; j++) {
              if (skills[j]) {
                columns.push(<div className="column skillBox" key={skills[j].skill}>
                  <div className="imageWrapper">
                    <img
                      className="image"
                      src={skills[j].link}
                      alt="skill"
                    />
                  </div>

                  <div className="subtitle">
                    {skills[j].skill}
                  </div>
                </div>);
              }
            }

            return columns;
          })()
        }
      </div>)
    }

    return rows;
  }

  render() {
    return (
      <div id="Skills">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Skills</h1>
              <div className="content">
                {this.generateSkillsGrid()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
