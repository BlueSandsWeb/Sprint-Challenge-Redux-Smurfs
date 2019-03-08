import axios from 'axios';
/*
For this project you'll need at least 2 action creators for the main portion,
and 2 more for the stretch problem.
Be sure to include action types for each type of action creator. Also, be sure to mind
the "pending" states like, fetching, creating, updating and deleting.
C - addSmurf
R - getSmurfs
U - updateSmurf
D - deleteSmurf
*/

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      // console.log(res.data);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: FETCHING_SMURFS_FAILURE })
    })
}



export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  console.log("Adding Smurf Dispatched");
  axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data });
      console.log("adding Smurf success dispatched");
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADDING_SMURF_FAILURE });
    })
}