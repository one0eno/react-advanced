import { ErrorMessage, useField } from 'formik';
import React from 'react';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className='text-inpunt'
        title={props.id || props.name}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.id || props.name}
        component='span'
        className='custom-span-error'
      />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};
