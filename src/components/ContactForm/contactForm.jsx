import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./form.module.css";

const ContactForm = ({ onAdd}) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(value, actions) => {
        actions.resetForm();
        onAdd(value);
      }}
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
