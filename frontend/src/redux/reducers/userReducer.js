// userReducer.js

const initialState = {
  user: null, // Initially, the user is not logged in
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload, // Set the user data in the store
      };
    default:
      return state;
  }
};

export default userReducer;



// const initialState = {
//   users: [],
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'GET_USERS':
//       return {
//         ...state,
//         users: action.payload,
//       };
//     case 'ADD_USER':
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     case 'UPDATE_USER':
//       const updatedUserIndex = state.users.findIndex(user => user.id === action.payload.id);

//       if (updatedUserIndex !== -1) {
//         const updatedUsers = [...state.users];
//         updatedUsers[updatedUserIndex] = action.payload;
//         return {
//           ...state,
//           users: updatedUsers,
//         };
//       }
//       return state;

//     case 'DELETE_USER':
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;
