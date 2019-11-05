import axios from 'axios';
import { GET_GROUPS, ADD_GROUP, DELETE_GROUP, GROUPS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getGroups = () => dispatch => {
  dispatch(setGroupsLoading());
  axios
    .get('/api/groups')
    .then(res =>
      dispatch({
        type: GET_GROUPS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addGroup = group => (dispatch, getState) => {
  axios
    .post('/api/groups', group, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_GROUP,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteGroup = id => (dispatch, getState) => {
  axios
    .delete(`/api/groups/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_GROUP,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setGroupsLoading = () => {
  return {
    type: GROUPS_LOADING
  };
};
 