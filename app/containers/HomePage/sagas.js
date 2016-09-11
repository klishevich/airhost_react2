/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { takeEvery } from 'redux-saga'
import {
  RECIEVE_BOOKINGS, ERROR_BOOKINGS, GET_BOOKINGS, RECIEVE_HOUSES, ERROR_HOUSES, GET_HOUSES
} from './constants';

import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(selectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  // Call our request helper (see 'utils/request')
  const repos = yield call(request, requestURL);

  if (!repos.err) {
    yield put(reposLoaded(repos.data, username));
  } else {
    yield put(repoLoadingError(repos.err));
  }
}

/**
 * Watches for LOAD_REPOS action and calls handler
 */
export function* getReposWatcher() {
  while (yield take(LOAD_REPOS)) {
    yield call(getRepos);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getReposWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getBookings() {
  try {
    var data
    yield fetch('https://airhosts.firebaseio.com/bookings.json').then(function(response) {
      return response.json()
    }).then(function(j) {
      data = j
      // console.log('data', data)
    });
    yield put({type: RECIEVE_BOOKINGS, data})
  } catch (error) {
    yield put({type: ERROR_BOOKINGS, error})
  }
}

export function* watchGetBookings() {
  yield* takeEvery(GET_BOOKINGS, getBookings)
}

export function* getHouses() {
  try {
    var data
    yield fetch('https://airhosts.firebaseio.com/houses.json').then(function(response) {
      return response.json()
    }).then(function(j) {
      data = j
    });
    yield put({type: RECIEVE_HOUSES, data})
  } catch (error) {
    yield put({type: ERROR_HOUSES, error})
  }
}

export function* watchGetHouses() {
  yield* takeEvery(GET_HOUSES, getHouses)
}

// Bootstrap sagas
export default [
  githubData,
  watchGetBookings,
  watchGetHouses
];
