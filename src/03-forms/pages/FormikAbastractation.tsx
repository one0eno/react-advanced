import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput, CustomCheck, CustomSelect } from '../components/index';
// import { MyTextInput } from '../components/MyTextInput';
// import { CustomSelect } from '../components/CustomSelect';
// import { CustomCheck } from '../components/CustomCheck';

interface FormValues {
  firstName?: String;
  lastName?: String;
  email?: String;
  terms: false;
  jobType: '';
}
export const FormikAbastractation = () => {
  return (
    <div>
      <h1>Formik FormikAbastractation </h1>
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
          firstName: Yup.string()
            .max(15, 'Ha de tener 15 caracteres como máximo')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Ha de tener 15 caracteres como máximo')
            .required('Requerido'),
          email: Yup.string()
            .required('Requerido')
            .email('El email no es correcto'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-junior'], 'Esta opción no es permitida')
            .required('Seleccione un tipo'),
        })}
      >
        {(formik) => (
          <Form noValidate autoComplete='off'>
            <MyTextInput
              label='First Name'
              name='firstName'
              type='text'
              placeholder='Nombre'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              type='text'
              placeholder='Apellido'
            />
            <MyTextInput
              label='Email'
              name='email'
              type='text'
              placeholder='Escriba su email'
            />

            <CustomSelect label='Job Type' name='jobType'>
              <option value=''>Seleccione</option>
              <option value='developer'> Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-junior'>IT Jr.</option>
            </CustomSelect>

            <CustomCheck
              label='Terminos y condiciones'
              name='terms'
              type='checkbox'
            />

            <button type='submit'>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
