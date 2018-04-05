// PropTypes
import PropTypes from 'prop-types';

// Next Modules
import Head from 'next/head';
import Router from 'next/router';

// NProgress
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

// Styled Component
import { injectGlobal } from 'styled-components';

// Font
import lato from './fonts/Lato-Light.ttf';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

injectGlobal`
  @font-face {
    font-family: 'Lato';
    src: url(${lato});
  }
  body {
    font-family: Arial
  }
`;

const Layout = props => (
  <div className="root">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
