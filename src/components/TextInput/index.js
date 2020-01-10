/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from 'formik';

const index = ({ field, ...props }) => (
  <div>
    <TextField {...props} {...field} variant="outlined" style={{ padding: 10 }} />
    <ErrorMessage name={field.name} />
  </div>
);

export default index;
