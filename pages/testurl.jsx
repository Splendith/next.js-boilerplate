import React from 'react';
import Head from 'next/head';
// import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Link } from '~/routes';

// Styled component element
import Title from 'src/components/elements/Title';

// Dynamic import
import CounterPage from 'src/components/CounterPage';
// const CounterPage = dynamic(import('src/components/CounterPage'));

const TestUrl = ({ router }) => (
  <CounterPage>
    <Head>
      <title>Test URL</title>
    </Head>
    <Title>URL Result</Title>
    <div>
      ID: {router.query.id}, Query ID: {router.query.queryId}
    </div>
    <br />
    <Link route="/">
      <a>Back to index</a>
    </Link>
  </CounterPage>
);

TestUrl.propTypes = {
  router: PropTypes.shape().isRequired,
};

export default withRouter(TestUrl);
