import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'John Snow',
        email: 'johnsnow@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Bill Gates',
        email: 'billgates@gmail.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Yonathan Abramov',
        email: 'yonathan@gmail.com',
        phone: '333-333-333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
