// reducers

import { combineReducers } from 'redux';
import { GET_FRIENDS, POST_FRIENDS } from '../actions';

const friendsReducer = (friends=[], action) => {
  switch(action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case POST_FRIENDS:
      return action.payload.data
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
