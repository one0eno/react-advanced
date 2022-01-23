import { Formik, Form, Field } from 'formik';
import React from 'react';
import fromJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { CustomSelect } from '../components/CustomSelect';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of fromJson) {
  initialValues[input.name] = input.value;

  if (!input.validation) continue;

  let schema = Yup.string();
  for (const rule of input.validation) {
    if (rule.type === 'required') {
      schema = schema.required('Campo requerido');
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 1, `Ha de tener ${(rule as any).value || 2} caracteres como mínimo`);
    }
    if (rule.type === 'email') {
      schema = schema.email('email no es correcto');
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DinamicForm = () => {
  return (
    <div>
      <h1>Dinamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {fromJson.map(({ type, name, label, placeholder, options }) => {
              if (type === 'select')
                return (
                  <CustomSelect key={name} label={label} name={name}>
                    <option key='nothing' value=''>
                      Seleccione
                    </option>
                    {options?.map(({ id, label }) => {
                      return (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      );
                    })}
                  </CustomSelect>
                );
              if (type === 'input' || type === 'password' || type === 'email')
                return <MyTextInput key={name} type={type as any} label={label} name={name} />;
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
