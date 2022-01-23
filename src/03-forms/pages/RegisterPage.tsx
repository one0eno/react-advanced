import React, { ChangeEvent, useState, FormEventHandler } from 'react';
import { UseForm } from '../hooks/UseForm';
import '../styles/styles.css';

export const RegisterPage = () => {
  interface RegisterProps {
    name: '';
    email: '';
    password: '';
    password2: '';
  }

  const { formData, onChange, resetForm, isValidEmail, name, email, password, password2 } = UseForm<RegisterProps>({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={onSubmit} autoComplete='off'>
        <input
          onChange={onChange}
          value={name}
          type='text'
          placeholder='Name'
          name='name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>El campo es necesario</span>}
        <input
          onChange={onChange}
          value={email}
          type='text'
          placeholder='Email'
          name='email'
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El email no es valido</span>}
        <input onChange={onChange} value={password} type='text' placeholder='Password' name='password' />
        {password.trim().length <= 0 && <span>El campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>El password ha de ser mayor de 6 caracteres</span>
        )}

        <input onChange={onChange} value={password2} type='text' placeholder='Repeat Password' name='password2' />

        {password2.trim().length <= 0 && <span>El campo es necesario</span>}
        {password2.trim().length < 6 && password2.trim().length > 0 && (
          <span>El password ha de ser mayor de 6 caracteres</span>
        )}
        {password2 !== password && <span>Los password no son iguales</span>}
        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
