/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const NavBarItems = [
  {
    text: 'Home',
    href: '#Home',
  },
  {
    text: 'About',
    href: '#About',
  },
  {
    text: 'Skills',
    href: '#Skills',
  },
  {
    text: 'Projects',
    href: '#Projects',
  },
  {
    text: 'Contact',
    href: '#Contact',
  }
];

class NavBar extends Component {
  state = {
    hamburgerIsOpen: false,
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className='navbar-brand'>
          <a
            role="button"
            className={`navbar-burger ${this.state.hamburgerIsOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => this.setState(state => ({ hamburgerIsOpen: !state.hamburgerIsOpen}))}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.hamburgerIsOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {
              NavBarItems.map(item => (<a
                key={item.text}
                className="navbar-item"
                href={item.href}
              >
                {item.text}
              </a>))
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
