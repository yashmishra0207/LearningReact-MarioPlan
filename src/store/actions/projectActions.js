export const createProject = (project) => {
  // FOR SYNC DATA WE RETURN ACTION CREATORS
  // return {
  //     type: "CREATE_PROJECT",
  //     project: project
  // }

  // ( WITH HELP OF THUNK ) FOR ASYNC DATA WE RETURN FUNCTION WHICH PERFORMS SOME ASYNC ACTION
  // here we are holding the dispatch in the function parameter which is passed by function calling
  // inside component(here, CreateProject)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB
      //Getting reference of firestore database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authoreId = getState().firebase.auth.uid;

      firestore.collection('projects').add({
          ...project,
          authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
          authorId: authoreId,
          createdAt: new Date()
      }).then(() => {
        // resume dispatch and send the action to the projectReducer
        dispatch({ type: "CREATE_PROJECT", project: project });
      }).catch((err) => {
          dispatch({ type: "CREATE_PROJECT_ERROR", err });
      })
  };
};
