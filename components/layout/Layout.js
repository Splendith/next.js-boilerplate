// PropTypes
import PropTypes from 'prop-types';

// Next Modules
import Head from 'next/head';
import Router from 'next/router';

// NProgress
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

import styled from 'styled-components';
import './Global';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: auto;
  
  @media (min-width: 480px) {
    width: 400px;
    padding: 40px 10px;
  }
`;

const Layout = props => (
  <div className="root">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Wrapper>{props.children}</Wrapper>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
