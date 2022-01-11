import React from 'react';
import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName?: String;
  lastName?: String;
  email?: String;
}
export const FormikBasicPage = () => {
  const validate = ({
    firstName = '',
    lastName = '',
    email = '',
  }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'Required';
    }
    if (firstName.length > 15) {
      errors.firstName = 'Must  be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'Required';
    }
    if (lastName.length >= 15) {
      errors.lastName = 'Must  be 15 characters or less';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: validate,
    });

  return (
    <div>
      <h1>Formik tutorial basico</h1>
      <form onSubmit={handleSubmit} noValidate autoComplete='off'>
        <label htmlFor='firstNam'>First name</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          type='text'
          name='firstName'
          title='firstName'
          autoComplete='off'
        />
        {touched.lastName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last name</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          type='text'
          name='lastName'
          title='lastName'
          autoComplete='off'
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='Email'>Email</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          type='text'
          name='email'
          title='Email'
          autoComplete='off'
        />
        {touched.lastName && errors.email && <span>{errors.email}</span>}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};
