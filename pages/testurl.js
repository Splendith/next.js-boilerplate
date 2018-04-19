import Head from 'next/head';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper';
import initStore from '~/store/';
import { Link } from '~/routes';

import Layout from '~/components/layout/Layout';
import CounterPage from '~/components/CounterPage';

const TestUrl = props => (
  <Layout>
    <CounterPage>
      <Head>
        <title>Test URL</title>
      </Head>
      <h2>URL Result</h2>
      <div>
        ID: {props.url.query.id}, Query ID: {props.url.query.queryId}
      </div>
      <br />
      <Link route="/">
        <a>Back to index</a>
      </Link>
    </CounterPage>
  </Layout>
);

TestUrl.propTypes = {
  url: PropTypes.shape().isRequired,
};

export default withRedux(initStore)(TestUrl);
