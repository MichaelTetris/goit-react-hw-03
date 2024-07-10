/* import React from 'react'; */

import css from "./app.module.css";
import arrContact from "./array.json"

import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList ";

import { Component, useState, useEffect } from "react";
import Contact from "./ContactList/Contact";

console.log(arrContact)

const getStoredContacts = () => {
  const StoredContacts = localStorage.getItem("contacts");
  return StoredContacts ? JSON.parse(StoredContacts) : arrContact;
};


const App = () => {
  const [contacts, setContacts] = useState(getStoredContacts);

  /* const [users, setUsers] = useState(arrContact) */

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );




  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList user = {contacts}/>
    </div>
  );
};

export default App;
