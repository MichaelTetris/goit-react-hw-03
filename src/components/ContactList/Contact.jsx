import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./element.module.css";

const Contact = ({ data: { id, name, number } }) => {
  return (
    <div id={id} className={css.element}>
      <ul>
        <li className={css.string}>
          <FaUser />
          <p className={css.icon}>{name}</p>
        </li>
        <li className={css.string}>
          <FaPhoneAlt />
          <p className={css.icon}>{number}</p>
        </li>
      </ul>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
