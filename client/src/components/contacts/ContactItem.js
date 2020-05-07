import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent } = contactContext;

  const { id, name, email, number, birthday, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'commercial' ? 'badge-success' : 'badge-primary') 
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope' /> {email}
          </li>
        )}
        {number && (
          <li>
            <i className='fas fa-phone-alt' /> {number}
          </li>
        )}
          {birthday && (
          <li>
            <i className='fas fa-birthday-cake' /> {birthday}
          </li>
        )}
      </ul>
      <p>
      <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
