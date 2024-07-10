/* import Contact from "./Contact"; */




import Contact from "./Contact";
import css from "./element.module.css";

const ContactList = ({ user, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {user.map((contact) => (
        <Contact
          key={contact.id}
          // id={id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;