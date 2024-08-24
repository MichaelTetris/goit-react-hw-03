
import Contact from "../Contact/Contact";
/* import css from "./element.module.css"; */

function ContactList ({contacts, filteredUserName, onDelete}) {
  return (
    <ul>
      {filteredUserName.map((contact) => (
        <li  key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
    
export default ContactList;
