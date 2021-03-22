import React, { Component } from "react";
import ContactForm from "./Components/ContactForm/";
import ContactList from "./Components/ContactList/";
import Filter from "./Components/Filter/";

import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "./redux/contacts";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div style={{ width: "300px", margin: "0 auto" }}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoadingContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
