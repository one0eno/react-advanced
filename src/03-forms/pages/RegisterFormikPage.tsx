import React, { ChangeEvent, useState, FormEventHandler } from 'react';
import { UseForm } from '../hooks/UseForm';
import '../styles/styles.css';
import { Formik, useFormik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        onReset={() => {
          alert('reset');
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Ha de tener 15 caracteres como máximo')
            .min(2, 'Ha de tener almenos 2 caracteres')
            .required('Requerido'),
          email: Yup.string().required('Requerido').email('El email no es correcto'),
          password: Yup.string().required('Requerido').min(6, 'El password no es correcto'),
          password2: Yup.string()
            .required('Requerido')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
      >
        {(formik) => (
          <Form noValidate autoComplete='off'>
            <label htmlFor='name'>Name</label>
            <Field name='name' type='text' />
            <ErrorMessage name='name' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='password'>Password</label>
            <Field name='password' type='text' />
            <ErrorMessage name='password' component='span' />

            <label htmlFor='password2'>Password 2</label>
            <Field name='password2' type='text' />
            <ErrorMessage name='password2' component='span' />

            <button type='submit'>Enviar</button>
            <button type='button' onClick={() => formik.handleReset()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
