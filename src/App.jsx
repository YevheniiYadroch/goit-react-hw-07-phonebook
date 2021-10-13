import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from './redux/contacts';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import './App.css';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

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

export default App;
