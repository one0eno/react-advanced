import React from 'react';
import { useFormik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

export const FormikYupPage = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Ha de tener 15 caracteres como máximo').required('Requerido'),
      lastName: Yup.string().max(15, 'Ha de tener 15 caracteres como máximo').required('Requerido'),
      email: Yup.string().required('Requerido').email('El email no es correcto'),
    }),
  });

  return (
    <div>
      <h1>Formik YUP </h1>
      <form onSubmit={handleSubmit} noValidate autoComplete='off'>
        <label htmlFor='firstNam'>First name</label>
        <input type='text' title='name' {...getFieldProps('firstName')} />
        {touched.lastName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor='lastName'>Last name</label>
        <input type='text' title='lastName' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input type='text' title='email' {...getFieldProps('email')} />
        {touched.lastName && errors.email && <span>{errors.email}</span>}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};
