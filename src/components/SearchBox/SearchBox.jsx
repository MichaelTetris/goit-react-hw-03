import { Formik, Form, Field} from 'formik';
import css from "./search.module.css"


const SearchBox = () => {
  return (
    
    <Formik>
      <Form className= {css.container}>
      <label htmlFor='filter'>Find conct by name</label>
      <Field name='filter'/>
      </Form>
    </Formik>
  )
};

export default SearchBox;