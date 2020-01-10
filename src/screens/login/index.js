import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextInput from '../../components/TextInput';
import Checkbox from '../../components/Checkbox';
import Form from '../../components/Form';

const wait = ms => new Promise(res => setTimeout(res, ms));

const fields = [
  {
    name: 'username',
    component: TextInput,
    label: 'Username',
    value: '',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Require...';
      }
      return error;
    },
  },
  {
    name: 'password',
    component: TextInput,
    label: 'Password',
    type: 'password',
    value: '',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Require...';
      }
      return error;
    },
  },
  {
    name: 'rememberMe',
    component: Checkbox,
    label: 'Remember Me',
    value: false,
  },
];

const index = () => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Paper elevation={1}>
      <h1>Login Page</h1>
      <Form
        fields={fields}
        initialValues={fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {})}
        onSubmit={async values => {
          try {
            await wait(2000);
            console.warn(values);
          } catch (error) {
            console.warn(error);
          }
        }}
      />
    </Paper>
  </div>
);

export default index;
