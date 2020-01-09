/* eslint-disable react/prop-types */
import React from 'react';
// import { format } from 'date-fns';

const index = ({ history }) => (
  <div>
    <h1>Home Page</h1>
    <button
      type="button"
      onClick={() => {
        history.push('about');
        // import('date-fns').then(({ format }) => {
        //   format(new Date(), 'MM-dd-yyyy');
        // });
      }}
    >
      Format date
    </button>
  </div>
);

export default index;
