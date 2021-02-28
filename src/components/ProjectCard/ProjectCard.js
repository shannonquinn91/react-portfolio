import React from 'react';
import "./projectcard.css"

function ProjectCard(props) {
    return <>  
        <div className="card text-center p-card">
            <div className="card-header">
                <h5>{props.projectName}</h5>
            </div>
            <div className="card-body">
                <img src={props.src} className="projects" alt={props.alt}></img>
                <h5 className="card-title">{props.projectTitle}</h5>
                <p className="card-text">{props.desc}</p>
                <a className="btn btn-success p-btn" type="button" href={props.deployed} target="_blank" rel="noreferrer">{props.btn}</a>
                <a className="btn btn-info p-btn" type="button" href={props.github} target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>
    </>
}

export default ProjectCard;