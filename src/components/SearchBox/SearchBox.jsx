/* import { Formik, Form, Field} from 'formik'; */
import css from "./search.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <label>
        <input type="text" name="searchBox" value={value} onChange={onFilter} />
      </label>
    </div>
  );
};

export default SearchBox;
