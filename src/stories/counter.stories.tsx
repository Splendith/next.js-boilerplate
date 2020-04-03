import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import initStore from '~src/store/';
import Counter from '~src/components/Counter';

const Wrapper = () => (
  <Provider store={initStore({}, false)}>
    <Counter />
  </Provider>
);

storiesOf('Counter', module).add('default', () => <Wrapper />);
