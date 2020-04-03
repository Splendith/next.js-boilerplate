import React from 'react';
import App, { AppContext } from 'next/app';
import { Provider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import initStore from '~src/store/';
import { RootState } from '~src/reducers/_persist';
import Layout from '~src/components/layout/Layout';

// Global Styles
import 'nprogress/nprogress.css';
import '~src/styles/scss/nprogress/nprogress.scss';
import '~src/styles/scss/style.scss';

class MyApp extends App<ReduxWrapperAppProps<RootState>> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

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

export default withRedux(initStore)(MyApp);
