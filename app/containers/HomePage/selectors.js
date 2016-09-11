/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectUsername = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('username')
);

const selectBookings = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('bookings')
);

export {
  selectHome,
  selectUsername,
  selectBookings
};
