import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { contactsOperations } from './redux/contacts';
import { getContacts } from "./redux/contacts/contacts-selectors";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import './App.css';

function App ({contacts}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  useEffect(() => {
    if (contacts.length !== 0) {  
      dispatch(contactsOperations.pushContacts(contacts))
    }
  }, [contacts])



    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
}

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
  }
}

export default connect(mapStateToProps, null)(App);
