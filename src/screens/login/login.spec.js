import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './index';
import Form from '../../components/Form';

function setup() {
  const props = {
    login: jest.fn(),
  };

  const wrapper = shallow(<Login {...props} />);
  return { wrapper, props };
}

describe('check login page', () => {
  it('check onsubmit', () => {
    const { wrapper, props } = setup();
    const form = wrapper.find(Form);
    expect(form.exists()).toBe(true);
    form.simulate('submit');
    form.simulate('submit');
    form.simulate('submit');
    form.simulate('submit');
    expect(props.login.mock.calls.length).toBe(4);
  });
});
