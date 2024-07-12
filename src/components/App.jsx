/* import React from 'react'; */

import css from "./app.module.css";
import userArr from "./array.json"

import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList ";
/* import Contact from "./ContactList/Contact"; */

import { useState, useEffect } from "react";


/* const userArr = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]; */



/* const getStoredContacts = () => {
  const StoredContacts = localStorage.getItem("contacts");
  return StoredContacts ? JSON.parse(StoredContacts) : userArr;
}; */

const App = () => {
  const [contacts, setContacts] = useState(userArr);
  const [filter, setFilter] = useState("");

 /*  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]); */

  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
   

  //function by change state
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm  onAdd={addContact}/>
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
