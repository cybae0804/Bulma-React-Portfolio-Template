import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    sender: '',
    email: '',
    title: '',
    message: '',
  }

  render() {
    return (
      <form id="ContactForm">
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">
                Name
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="John Smith"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                Email
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="jSmith@email.com"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                Title
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Hi John"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-comments"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="field">
            <label className="label">
              Message
            </label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                placeholder="Your Message"
              />
            </div>
          </div>
        </div>
        <div className="buttonWrapper">
          <button className="button is-link">
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
