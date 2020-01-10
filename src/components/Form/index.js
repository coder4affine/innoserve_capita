/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';

const index = ({ fields, ...props }) => (
  <Formik {...props}>
    {({ isSubmitting }) => (
      <Form>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 50 }}>
          {fields.map(field => (
            <Field key={field.name} {...field} />
          ))}
          <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
            Primary
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);

export default index;
