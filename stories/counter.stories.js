import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Counter from '~/components/Counter';

import initStore from '~/store/';

const Wrapper = () => (
  <Provider store={initStore({}, false)}>
    <Counter />
  </Provider>
);

export default Wrapper;

storiesOf('Counter', module).add('default', () => <Wrapper />);
