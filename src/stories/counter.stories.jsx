import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import Counter from 'src/components/Counter';
import initStore from 'src/store/';

const Wrapper = () => (
  <Provider store={initStore({}, false)}>
    <Counter />
  </Provider>
);

storiesOf('Counter', module).add('default', () => <Wrapper />);
