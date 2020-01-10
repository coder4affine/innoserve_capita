/* eslint-disable react/prop-types */
import React from 'react';

const Select = ({ field, options, ...props }) => (
  <select {...props} {...field}>
    {options.map(x => (
      <option key={x.value} value={x.value}>
        {x.text}
      </option>
    ))}
  </select>
);

export default Select;
