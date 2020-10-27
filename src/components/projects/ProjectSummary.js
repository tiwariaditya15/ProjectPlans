import React from 'react';

function ProjectSummary (props){

    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{props.proj.title}</span>
                <p>Posted by Aditya</p>
                <p className="grey-text">24th June 2020, 7 PM</p>
            </div>
        </div>
    );
}

export default ProjectSummary;