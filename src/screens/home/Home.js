/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/Form';
import fields from './fields';

const Home = ({ loadCategories, categories, saveProductRequest, loading }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    const newFields = fields.map(x => {
      if (x.name === 'category') {
        return { ...x, options: categories };
      }
      return x;
    });
    setData(newFields);
  }, [categories]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1>HOME page</h1>
      {data && (
        <Form
          fields={data}
          initialValues={fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {})}
          onSubmit={saveProductRequest}
        />
      )}
    </div>
  );
};

Home.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  saveProductRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
