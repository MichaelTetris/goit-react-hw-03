import { Formik, Form, Field} from 'formik';
import css from './form.module.css';

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
			<Form className={css.form}>
				<label htmlFor="name">Name</label>
        <Field className ={css.input}  name="name" />
        <label htmlFor="number">Number</label>
        <Field className ={css.input}  name="number" />
        <button className ={css.btn}  type="submit">Add Contact</button>

			</Form>
    </Formik>
  );
};

export default ContactForm;