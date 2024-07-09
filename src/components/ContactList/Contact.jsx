import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./element.module.css";

const Contact = () => {
  return (
    <div className={css.element}>
      <div>
        <span className={css.string}>
          <FaUser />
          <p>Name</p>
        </span>
        <span className={css.string}>
          <FaPhoneAlt />
          <p>Phone number</p>
        </span>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
