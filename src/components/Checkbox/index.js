/* eslint-disable react/prop-types */
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const index = ({ field, label, ...props }) => (
  <FormControlLabel
    control={<Checkbox checked={field.value} color="primary" {...props} {...field} />}
    label={label}
  />
);

export default index;
