import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from '../redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configure } from '@testing-library/react';
import logger from 'redux-logger';
// const store = createStore(reducer, composeWithDevTools());
const persistConfig = {
  key: 'contacts',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
// export default () => {
//   let store = createStore(persistedReducer)
const persistor = persistStore(store);
//   return { store, persistor }
// }
export default { store, persistor };
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
