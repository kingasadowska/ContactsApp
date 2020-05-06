import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT
  } from '../actions/actionTypes';
  
  export default (state, action) => {
    switch (action.type) {
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          )
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
      };
      default:
        return state;
    }
  };