import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid"; 
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../actions/actionTypes';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'John Snow',
        email: 'johnsnow@gmail.com',
        number: '111-111-1111',
        birthday: '24.12.1990',
        type: 'private'
      },
      {
        id: 2,
        name: 'Bill Gates',
        email: 'billgates@gmail.com',
        number: '222-222-2222',
        birthday: '20.12.1965',
        type: 'commercial'
      },
      {
        id: 3,
        name: 'Yonathan Abramov',
        email: 'yonathan@gmail.com',
        number: '333-333-333',
        birthday: '27.12.1993',
        type: 'commercial'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

   const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
 
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
 
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
