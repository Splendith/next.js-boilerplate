import React from 'react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import Layout from '~components/layout/Layout';

// Global Styles
import 'nprogress/nprogress.css';
import '~styles/scss/nprogress/nprogress.scss';
import '~styles/scss/style.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default MyApp;
