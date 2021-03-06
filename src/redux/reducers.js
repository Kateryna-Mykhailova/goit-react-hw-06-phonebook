import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactReducer = createReducer(initialState, {
  [actions.addNewContact]: (state, { payload }) => [...state, payload],
});

const filterContactReducer = createReducer('', {
  [actions.filterContact]: (state, { payload }) => payload,
});

// const contactReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'contact/add':
//       return [...state, payload];
//     default:
//       return state;
//   }
// };
export default combineReducers({
  contacts: contactReducer,
  filter: filterContactReducer,
});
