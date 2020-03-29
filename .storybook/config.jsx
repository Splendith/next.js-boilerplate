import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from 'src/styles/js/themes/Default';

import 'src/styles/scss/style.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.jsx?$/);
function loadStories() {
  addDecorator(story => (
    <ThemeProvider theme={DefaultTheme}>
      <div>{story()}</div>
    </ThemeProvider>
  ));
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
