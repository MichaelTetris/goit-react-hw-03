/* import React from 'react'; */

import css from "./app.module.css";

import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/SearchBox";

/* import { useState, useEffect } from "react"; */

const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox/>

      {/* <ContactList /> */}
    </div>
  );
};

export default App;
