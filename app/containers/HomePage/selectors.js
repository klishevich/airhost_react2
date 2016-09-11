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

const selectHouses = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('houses')
);

export {
  selectHome,
  selectUsername,
  selectBookings,
  selectHouses
};
