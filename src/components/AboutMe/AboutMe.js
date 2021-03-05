import React from 'react';
import './aboutme.css'
import headshot from '../../assets/26110_381683018525_119430_n.jpg';
import resume from '../../assets/SQuinn Resume.pdf';

function AboutMe () {
    return <>
        <div className="card mb-3 about-card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={headshot} className="card-img bio" alt="headshot"/>
                </div>
                <div className="col-md-8 about-body">
                    <div className="card-body">
                        <h5 className="card-title">Hi! I'm Shannon.</h5>
                        <br></br>
                        <p className="card-text">My background and life-long involvement in athletics has made me the ultimate team-player in my professional career. I am currently working towards a full-stack web developer certificate from the Univesity of New Hampshire. I am working on skills in HTML, CSS, Javascript, and responsive web design. As I seek opportunities in this new field, I am looking forward to new challenges and collaborating with others to create exciting and effective experiences on the web. I have built a portfolio of work to showcase my understanding and ability to work with different languages.</p>
                        <br></br>
                        <a className="btn btn-primary btn-lg btn-block" href={resume} target="_blank" rel="noreferrer">
                            <i className="fas fa-paperclip"></i>
                              Click here to view my resume.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AboutMe; 