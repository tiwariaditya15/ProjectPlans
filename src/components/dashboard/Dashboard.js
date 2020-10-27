import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
class Dashboard extends Component{
    render(){
        // console.log(this.props);
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return(
            <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList projects={this.props.project}/>
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notification />
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('Firestore order goes here ----> ',  state.firestore.ordered.projects);
    return{
        // project: state.firestore.ordered.projects  
        project: state.firestore.ordered.projects || state.project.projects,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(Dashboard);