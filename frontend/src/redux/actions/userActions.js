// src/redux/actions/userActions.js
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/api/users'); // Replace with your API endpoint
    dispatch({ type: 'GET_USERS', payload: response.data });
  } catch (error) {
    console.error('Error fetching users', error);
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/register', user); // Replace with your API endpoint
    dispatch({ type: 'ADD_USER', payload: response.data });
  } catch (error) {
    console.error('Error adding user', error);
  }
};

export const updateUser = (userId, updatedUser) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:8000/api/update/${userId}`, updatedUser); // Replace with your API endpoint
    console.log(response);
    dispatch({ type: 'UPDATE_USER', payload: response.data });
  } catch (error) {
    console.error('Error updating user', error);
    dispatch({ type: 'UPDATE_USER_ERROR', payload: error });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/api/delete/${userId}`); // Replace with your API endpoint
    dispatch({ type: 'DELETE_USER', payload: userId });
  } catch (error) {
    console.error('Error deleting user', error);
  }
};


export const setUser = (id, name) => {
  return {
    type: 'SET_USER',
    payload: { id, name },
  };
};