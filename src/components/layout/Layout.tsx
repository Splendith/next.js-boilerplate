import React, { FunctionComponent } from 'react';

// Next Modules
import Head from 'next/head';
import Router from 'next/router';

// NProgress
import NProgress from 'nprogress';

// Styled Component
import styled, { ThemeProvider } from 'styled-components';
import Media from '~styles/js/lib/Media';
import DefaultTheme from '~styles/js/themes/Default';

Router.events.on('routeChangeStart', () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: auto;

  ${Media.sm`
    width: 400px;
    padding: 40px 10px;
  `};
`;

const Layout: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Wrapper>{children}</Wrapper>
    </div>
  </ThemeProvider>
);

export default Layout;
