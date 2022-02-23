import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import contactReducer from '../redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configure } from '@testing-library/react';
import logger from 'redux-logger';
// const store = createStore(reducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
// const initialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];

// const reducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case "contact/add":
//       return {state: [...state, payload]
//       }

//     case "contact/delete":
//       return {state: [...state]
//       }
//   default:
//   return state}
// };

// const store = createStore(reducer);

// export default store;

// --- /----/----/---/

// const myReducer = createReducer(0, {});

// export const store = configureStore({
//     reducer: {
//       myValue: myReducer
//   },
// });
