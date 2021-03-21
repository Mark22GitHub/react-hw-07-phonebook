import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import contactsOperations from "../../redux/contacts/contacts-operations";

const ContactList = ({ contacts, onDeleteFromContacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.ContactListItem}>
            <p className={styles.ContactsListText}>
              {name}:{number}
            </p>
            <button
              className={styles.ContactsListButton}
              onClick={() => onDeleteFromContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;
//   const visibleContacts = getVisibleContacts(items, filter);
//   return { contacts: visibleContacts };
// };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteFromContacts: (id) =>
    dispatch(contactsOperations.deleteFromContacts(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteFromContacts: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
