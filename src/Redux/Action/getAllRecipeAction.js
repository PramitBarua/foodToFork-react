import axios from 'axios';
import {
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_FAILURE,
} from './ActionTypes';

import { changeInit } from './';

function fetchRequest() {
  return {
    type: SEARCH_RECIPES_REQUEST,
  };
}

function fetchSuccess(body) {
  return {
    type: SEARCH_RECIPES_SUCCESS,
    body,
  };
}

function fetchFailure(error) {
  return {
    type: SEARCH_RECIPES_FAILURE,
    error,
  };
}

export const getAllRecipe = (apiEndpoint) => (dispatch) => {
  dispatch(fetchRequest());
  dispatch(changeInit(false));
  return axios
    .get(apiEndpoint)
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.response.data));
    });
};
