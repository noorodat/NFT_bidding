// src/redux/store.js

// ...

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



// // src/redux/store.js
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import userReducer from './reducers/userReducer';

// const rootReducer = combineReducers({
//   user: userReducer,
//   // Add other reducers here if needed
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
