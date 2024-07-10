import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./element.module.css";

const Contact = (user => {
  const {id,name,number} = user;
  return (
    <div id={id} className={css.element}>
      <ul>
        <li className={css.string}>
          <FaUser />
          <p>{name}</p>
        </li>
        <li className={css.string}>
          <FaPhoneAlt />
          <p>{number}</p>
        </li>
      </ul>
       <button>Delete</button> 
    </div>
  );
});

export default Contact;
