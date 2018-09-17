import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import Counter from '@/components/Counter';
import initStore from '@/store/';

import '@/styles/scss/style.scss';

const Wrapper = () => (
  <Provider store={initStore({}, false)}>
    <Counter />
  </Provider>
);

storiesOf('Counter', module).add('default', () => <Wrapper />);
