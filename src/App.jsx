import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsOperations } from './redux/contacts';
import { getContacts, getFilter } from "./redux/contacts/contacts-selectors";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import './App.css';

function App ({contacts, filter, onAdd, onSearch, onDelete}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  useEffect(() => {
    if (contacts.length !== 0) {  
      dispatch(contactsOperations.pushContacts(contacts))
    }
  }, [contacts])


  const list = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onChange={ onAdd}/>
        <h2>Contacts</h2>
        <Filter onChange={onSearch}/>
        <ContactList props={list} onDelete={onDelete}/>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
    filter: getFilter(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (e) => dispatch(contactsActions.addContact(e)),
    onDelete: (e) => dispatch(contactsActions.deleteContact(e)),
    onSearch: (e) => dispatch(contactsActions.searchContact(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
