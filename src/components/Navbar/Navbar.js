import React from 'react';
import './navbar.css';

function Navbar () {
    return <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" id="name-nav" href="#">Shannon Quinn</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#sect-about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sect-proj">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sect-contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
}

export default Navbar;