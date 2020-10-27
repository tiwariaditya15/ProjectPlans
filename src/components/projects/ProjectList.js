import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
function ProjectList (props){
    // console.log(props);
    const projects = props.projects;
    const ProjectLists = projects.map( project => {
        return (
            <Link to={'/project/' + project.id}>
                <ProjectSummary proj={project} key={project.id}/>
            </Link>
        );
    });
    return(
        <div className="project-list section">   
            { ProjectLists }
        </div>
    );
}

export default ProjectList;