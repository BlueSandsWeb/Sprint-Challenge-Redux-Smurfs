/* Be sure to import in all of the action types from `../actions` */
import { FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDING_SMURF, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE } from '../actions';

/* Your initial/default state for this project could *Although does not have to* look a lot like this */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}


function rootReducer(state = initialState, action) {
  switch (action.type) {

    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: '',
      }
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        addingSmurf: false,
        error: '',
      }
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }

      case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error: '',
      }
    case ADDING_SMURF_SUCCESS:
      console.log('action.payload: ', ...action.payload);
      return {
        ...state,
        addingSmurf: false,
        smurfs: [...action.payload],
      }
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: "add smurf failed",
      }
    default:
    return state;
  }
}

export default rootReducer;


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/