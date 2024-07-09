import { Formik, Form, Field} from 'formik';


const SearchBox = () => {
  return (
    
    <Formik>
      <Form>
      <label htmlFor='filter'>Find conct by name</label>
      <Field name='filter'/>
      </Form>
    </Formik>
  )
}

export default SearchBox;