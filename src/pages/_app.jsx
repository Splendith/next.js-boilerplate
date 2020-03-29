import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '~src/store/';
import Layout from '~src/components/layout/Layout';

// Global Styles
import 'nprogress/nprogress.css';
import '~src/styles/scss/nprogress/nprogress.scss';
import '~src/styles/scss/style.scss';

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
