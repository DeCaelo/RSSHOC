import { CHANGE_AUTH } from '../actions/types';

// by default user is not logged in => false
export default function(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
  }

  return state;
}
