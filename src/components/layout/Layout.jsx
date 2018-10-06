import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Next Modules
import Head from 'next/head';
import Router from 'next/router';

// NProgress
import 'nprogress/nprogress.css';
import '@/styles/scss/nprogress/nprogress.scss';
import NProgress from 'nprogress';

// Global CSS
import '@/styles/scss/style.scss';

// Styled Component
import styled, { ThemeProvider } from 'styled-components';
import Media from '@/styles/js/lib/Media';
import DefaultTheme from '@/styles/js/themes/Default';
import GlobalStyle from '@/styles/js/lib/GlobalStyle';

Router.onRouteChangeStart = () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: auto;

  ${Media.sm`
    width: 400px;
    padding: 40px 10px;
  `};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
