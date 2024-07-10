
import { Formik, Form, Field} from 'formik';
import css from './form.module.css';

const ContactForm = () => {
  return (
    <Formik initialValues={{ name: "",
      number: ""}} onSubmit={() => {}}>
			<Form className={css.form}>
				<label htmlFor="name">Name</label>
        <Field className ={css.input} id="name"  name="name" />
        <label htmlFor="number">Number</label>
        <Field className ={css.input} id="number"  name="number" />
        <button className ={css.btn}  type="submit">Add Contact</button>

			</Form>
    </Formik>
  );
};

export default ContactForm;