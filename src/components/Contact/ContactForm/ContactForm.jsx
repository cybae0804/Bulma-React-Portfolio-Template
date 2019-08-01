import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    sender: {
      value: '',
      errorMessage: '',
    },
    email: {
      value: '',
      errorMessage: '',
    },
    title: {
      value: '',
      errorMessage: '',
    },
    message: {
      value: '',
      errorMessage: '',
    },
    response: '',
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      }
    }));
  }

  validate = () => {
    let validFlag = true;

    if (this.state.sender.value.trim() === '') {
      this.setState(prevState => ({
        sender: {
          value: prevState.sender.value.trim(),
          errorMessage: 'This field is required.'
        }
      }));

      validFlag = false;
    } else if (!/^[a-zA-Z ]{2,30}$/.test(this.state.sender.value.trim())) {
      this.setState(prevState => ({
        sender: {
          ...prevState.sender,
          errorMessage: 'Name must comprise of alphabets.'
        }
      }));

      validFlag = false;
    } else {
      this.setState(prevState => ({
        sender: {
          ...prevState.sender,
          errorMessage: ''
        }
      }));
    }

    if (this.state.email.value.trim() === '') {
      this.setState(prevState => ({
        email: {
          value: prevState.email.value.trim(),
          errorMessage: 'This field is required.'
        }
      }));

      validFlag = false;
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.value.trim())) {
      this.setState(prevState => ({
        email: {
          ...prevState.email,
          errorMessage: 'Please format your email correctly.'
        }
      }));

      validFlag = false;
    } else {
      this.setState(prevState => ({
        email: {
          ...prevState.email,
          errorMessage: ''
        }
      }));
    }

    if (this.state.title.value.trim() === '') {
      this.setState(prevState => ({
        title: {
          value: prevState.title.value.trim(),
          errorMessage: 'This field is required.'
        }
      }));

      validFlag = false;
    } else {
      this.setState(prevState => ({
        title: {
          ...prevState.title,
          errorMessage: ''
        }
      }));
    }

    if (this.state.message.value.trim() === '') {
      this.setState(prevState => ({
        message: {
          value: prevState.message.value.trim(),
          errorMessage: 'This field is required.'
        }
      }));

      validFlag = false;
    } else {
      this.setState(prevState => ({
        message: {
          ...prevState.message,
          errorMessage: ''
        }
      }));
    }

    return validFlag;
  }

  send = async (e) => {
    e.preventDefault();

    if (this.validate()) {
      try {
        const { status } = await emailjs.send('YOUR SERVICE ID','YOUR TEMPLATE ID', {
          from_name: this.state.sender.value,
          reply_to: this.state.email.value,
          title: this.state.title.value,
          message: this.state.message.value,
        }, 'YOUR UESR ID');

        if (status === 200) {
          this.setState({ response: `Thank you! I'll get back to you ASAP.`});
        } else {
          throw new Error();
        }
      } catch(e) {
        this.setState({ response: `Something went wrong. Please try again.`});
      }
    }
  }

  render() {
    return (
      <form id="ContactForm" onSubmit={this.send}>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">
                Name
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={`input ${this.state.sender.errorMessage && 'is-danger'}`}
                  type="text"
                  placeholder="John Smith"
                  onChange={this.handleInput}
                  name="sender"
                  value={this.state.sender.value}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                {
                  this.state.sender.errorMessage ? <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span> : null
                }
              </div>
              <p className="help is-danger preserveWhiteSpace">
                {this.state.sender.errorMessage || ' '}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                Email
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={`input ${this.state.email.errorMessage && 'is-danger'}`}
                  type="text"
                  placeholder="jSmith@email.com"
                  onChange={this.handleInput}
                  name="email"
                  value={this.state.email.value}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                {
                  this.state.email.errorMessage ? <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span> : null
                }
              </div>
              <p className="help is-danger preserveWhiteSpace">
                {this.state.email.errorMessage || ' '}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                Title
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={`input ${this.state.title.errorMessage && 'is-danger'}`}
                  type="text"
                  placeholder="Hi John"
                  onChange={this.handleInput}
                  name="title"
                  value={this.state.title.value}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-comments"></i>
                </span>
                {
                  this.state.title.errorMessage ? <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span> : null
                }
              </div>
              <p className="help is-danger preserveWhiteSpace">
                {this.state.title.errorMessage || ' '}
              </p>
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
                className={`textarea ${this.state.message.errorMessage && 'is-danger'}`}
                type="text"
                placeholder="Your Message"
                onChange={this.handleInput}
                name="message"
                value={this.state.message.value}
              />
            </div>
            <p className="help is-danger preserveWhiteSpace">
              {this.state.message.errorMessage || ' '}
            </p>
          </div>
        </div>
        <div className="buttonWrapper">
          <span className="responseMessage">{this.state.response}</span>
          <button className="button is-link verticalAlignMiddle" onClick={this.send}>
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
