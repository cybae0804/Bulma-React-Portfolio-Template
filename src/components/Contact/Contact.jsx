import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { about } from '../../configs';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="Contact">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{`Contact ${about.firstName}`} </h1>
              <div className="content">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
