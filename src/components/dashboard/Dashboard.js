import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../project/ProjectList'
import Notification from './Notification'

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><ProjectList projects={projects} /></div>
                    <div className="col s12 m5 offset-m1"><Notification/></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)
