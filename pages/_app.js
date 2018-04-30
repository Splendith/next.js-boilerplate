import App, { Container } from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '~/store/';

import Layout from '~/components/layout/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
