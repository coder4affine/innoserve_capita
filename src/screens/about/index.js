import React from 'react';
import Button from '@material-ui/core/Button';
import { LocaleConsumer } from '../../context/localeContext';

const index = () => {
  console.warn('rerender');
  return (
    <div>
      <h1>About Page</h1>
      <LocaleConsumer>
        {value => (
          <div>
            <h1>{value.locale}</h1>
            <Button
              variant="contained"
              color="primary"
              onClick={() => value.changeLocale(value.locale === 'en' ? 'es' : 'en')}
            >
              Change Locale
            </Button>
          </div>
        )}
      </LocaleConsumer>
    </div>
  );
};

export default index;
