/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput';
import Checkbox from '../../components/Checkbox';
import Form from '../../components/Form';

// const wait = ms => new Promise(res => setTimeout(res, ms));

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

export const Login = ({ user, products, login }) => (
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
        onSubmit={login}
      />
    </Paper>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: 'LOGIN_REQUEST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
