
import Contact from "./Contact";
import css from "./element.module.css";

function ContactList ({contacts , onDelete}) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li  key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
    
export default ContactList;
