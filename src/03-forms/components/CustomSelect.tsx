import { useField, Field, ErrorMessage } from 'formik';
import React from 'react';

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const CustomSelect = ({ label, ...props }: Props) => {
  const [filed, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select title={props.id || props.name} {...filed} {...props} />
      <ErrorMessage
        name={props.id || props.name}
        component='span'
        className='custom-span-error'
      />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};
