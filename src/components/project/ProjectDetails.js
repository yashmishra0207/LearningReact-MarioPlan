import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router";
import { compose } from "redux";
import moment from "moment";

const ProjectDetails = (props) => {
  //   const id = props.match.params.id;
  if (!props.auth.uid) return <Redirect to="/signin" />;

  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(props.project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      //   <div className="container center">
      //     <p>Loading Project...</p>
      //   </div>
      <div className=" container center ">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const projects = state.firestore.data.projects;
  const project = projects ? projects[ownProps.match.params.id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
