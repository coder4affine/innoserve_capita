import TextInput from '../../components/TextInput';
import Select from '../../components/Select/Select';

export default [
  {
    name: 'productName',
    component: TextInput,
    label: 'Product Name',
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
    name: 'category',
    component: Select,
    label: 'Category',
    value: '',
    options: [],
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Require...';
      }
      return error;
    },
  },
  {
    name: 'price',
    component: TextInput,
    label: 'Price',
    type: 'number',
    value: '',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Require...';
      }
      return error;
    },
  },
];
