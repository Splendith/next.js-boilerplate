import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import initStore from '~src/store/';
import Layout from '~src/components/layout/Layout';

Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]');
    const timestamp = new Date().valueOf();
    els[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
  }
});

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    /* eslint-disable */
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
    /* eslint-enable */
  }
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape(),
  store: PropTypes.shape(),
};

MyApp.defaultProps = {
  pageProps: undefined,
  store: undefined,
};

export default withRedux(initStore)(MyApp);
