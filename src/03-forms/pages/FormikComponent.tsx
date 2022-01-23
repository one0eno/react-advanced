import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

interface FormValues {
  firstName?: String;
  lastName?: String;
  email?: String;
}
export const FormikComponent = () => {
  return (
    <div>
      <h1>Formik Components </h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Ha de tener 15 caracteres como máximo').required('Requerido'),
          lastName: Yup.string().max(15, 'Ha de tener 15 caracteres como máximo').required('Requerido'),
          email: Yup.string().required('Requerido').email('El email no es correcto'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string().notOneOf(['it-junior'], 'Esta opción no es permitida').required('Seleccione un tipo'),
        })}
      >
        {(formik) => (
          <Form noValidate autoComplete='off'>
            <label htmlFor='firstNam'>First name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Email</label>
            <Field name='jobType' as='select'>
              <option value=''>Seleccione</option>
              <option value='developer'> Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-junior'>IT Jr.</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terminos de uso
            </label>

            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
