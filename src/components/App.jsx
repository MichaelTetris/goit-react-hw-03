/* import React from 'react'; */

import css from "./app.module.css";
import userArr from "./array.json";

import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList ";
/* import Contact from "./ContactList/Contact"; */

import { useState, useEffect } from "react";

const App = () => {
  const [contacts, setContacts] = useState(userArr);
  const [filter, setFilter] = useState("");

  //function by change state
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  

  const getStoredContacts = () => {
    const StoredContacts = localStorage.getItem("contacts");
    return StoredContacts ? JSON.parse(StoredContacts) : userArr;
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
      <SearchBox />
      <ContactList contacts={contacts}  onDelete={deleteContact} />
    </div>
  );
};

export default App;
