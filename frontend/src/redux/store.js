// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Define your initial state
const initialState = {
  user: {
    id: null,
    name: '',
  },
};

// Define your reducer
const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.payload.id,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;