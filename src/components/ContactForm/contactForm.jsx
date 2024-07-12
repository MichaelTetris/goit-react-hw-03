import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { useId } from "react";
import css from "./form.module.css";



const ContactForm = ({ onAdd}) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "min 2").required("required"), 
    number: Yup.string().min(4, "min 4").required("required") 
  })

  
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(value, actions) => {
        actions.resetForm();
        onAdd(value);
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field className={css.input} id={nameFieldId} name="name" />
        <label htmlFor="number">Number</label>
        <Field className={css.input} id={numberFieldId} name="number" />
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
