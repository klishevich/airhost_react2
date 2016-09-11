/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const GET_BOOKINGS = 'GET_BOOKINGS';
export const RECIEVE_BOOKINGS = 'RECIEVE_BOOKINGS';
export const ERROR_BOOKINGS = 'ERROR_BOOKINGS';
export const GET_HOUSES = 'GET_HOUSES';
export const RECIEVE_HOUSES = 'RECIEVE_HOUSES';
export const ERROR_HOUSES = 'ERROR_HOUSES';
