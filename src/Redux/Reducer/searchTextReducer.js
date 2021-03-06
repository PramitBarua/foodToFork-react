import { CHANGE_SEARCH_TEXT } from '../Action/ActionTypes';

const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  }
};

export default searchTextReducer;
