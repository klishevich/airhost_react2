/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  CHANGE_USERNAME,
  RECIEVE_BOOKINGS,
  RECIEVE_HOUSES
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  username: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:

      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case RECIEVE_BOOKINGS:
      // console.log('homeReducer', actbion.data)
      return state
        .set('bookings', action.data);
    case RECIEVE_HOUSES:
      return state
        .set('houses', action.data);
    default:
      return state;
  }
}

export default homeReducer;
