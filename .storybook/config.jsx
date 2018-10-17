import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from '@/styles/js/themes/Default';

import '@/styles/scss/style.scss';
import GlobalStyle from '@/styles/js/lib/GlobalStyle';

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.jsx?$/);
function loadStories() {
  addDecorator(story => (
    <ThemeProvider theme={DefaultTheme}>
      <div>
        <GlobalStyle />
        {story()}
      </div>
    </ThemeProvider>
  ));
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
