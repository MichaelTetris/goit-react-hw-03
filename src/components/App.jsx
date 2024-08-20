/* import React from 'react'; */

import css from "./app.module.css";
import userArr from "./array.json";

import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList ";

import { useState, useEffect } from "react";

const App = () => {

  const getStoredContacts = () => {
    const StoredContacts = localStorage.getItem("contacts");
    return StoredContacts ? JSON.parse(StoredContacts) : userArr;
  };

  const [contacts, setContacts] = useState(getStoredContacts());
  const [filter, setFilter] = useState("");

  //function by change state
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  // function delete contact
  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId)
    })
  }

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={handleFilter}/>
      <ContactList contacts={contacts} filteredUserName={filteredContacts}  onDelete={deleteContact} />
    </div>
  );
};

export default App;
