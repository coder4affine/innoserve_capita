import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import Form from '../../components/Form';
import fields from './fields';

function setup() {
  const props = {
    loadCategories: jest.fn(),
    saveProductRequest: jest.fn(),
    loading: false,
    categories: [],
  };

  const wrapper = shallow(<Home {...props} />);
  return { wrapper, props };
}

describe('description', () => {
  it('length of div', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').length).toBe(1);
  });

  it('check h1', () => {
    const { wrapper } = setup();
    const h1 = wrapper.find('h1');
    expect(h1.length).toBe(1);
    expect(h1.text()).toEqual('HOME page');
  });

  it('check Form is exist', () => {
    const { wrapper } = setup();
    const form = wrapper.find(Form);
    expect(form.exists()).toBe(false);
  });

  it('check loading', () => {
    const { wrapper } = setup();
    wrapper.setProps({ loading: true });
    const h1 = wrapper.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('Loading....');
  });
});
