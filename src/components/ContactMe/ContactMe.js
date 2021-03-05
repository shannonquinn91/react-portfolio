import React from 'react';
import './contactme.css'


function ContactMe () {
    return <>
        <div className="card text-center c-card">
            <h5>My Contact Information</h5>
        </div>
        <div className="card-body c-card">
            <p className="card-text">Check out my LinkedIn and GitHub pages, or send me an email at <a href="mailto:shannon.quinn91@gmail.com">shannon.quinn91@gmail.com</a>!</p>
            <p className="card-text">I currently live in Exeter, NH, and you can reach me on my cell phone: 603-828-6116.</p>
            <a href="https://www.linkedin.com/in/shannon-quinn-4465074a/" className="btn btn-primary btn-lg c-btn" target="_blank" rel="noreferrer"> 
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/shannonquinn91" className="btn btn-primary btn-lg c-btn" target="_blank" rel="noreferrer"> 
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:shannon.quinn91@gmail.com" className="btn btn-primary btn-lg c-btn"> 
                <i className="fas fa-envelope"></i>
              </a>
        </div>
    </>
}

export default ContactMe; 
