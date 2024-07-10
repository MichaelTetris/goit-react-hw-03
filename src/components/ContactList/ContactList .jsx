

import Contact from "./Contact";
import css from "./element.module.css";

function ContactList ({contacts}) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li  key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
    
  


export default ContactList;
