import React from 'react';
import  { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
function ProjectDetails (props){
    // console.log(props);
    const { project, auth } = props;
    if(!auth.uid) return <Redirect to="/signin" />
    if ( project){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title-{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By { project.authorName }</div>
                        <div>24th June 2020, 9am</div>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="container center">
                <p>Nothing to show yet...</p>
            </div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return{
        project: project,
        auth: state.firebase.auth
    }
};
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'projects'}
        ])
)(ProjectDetails);