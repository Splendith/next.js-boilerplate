import withRedux from 'next-redux-wrapper';
import initStore from '~/store/';
import { Link } from '~/routes';
import Head from 'next/head';

import PropTypes from 'prop-types';
import Layout from '~/components/layout/Layout';
import Counter from '~/components/Counter';

const TestUrl = props => (
  <Layout>
    <Head>
      <title>Test URL</title>
    </Head>
    <div>ID: {props.url.query.id}</div>
    <div>Query ID: {props.url.query.queryId}</div>
    <br />
    <Link route="/">
      <a>Index</a>
    </Link>
    <Counter />
  </Layout>
);

TestUrl.propTypes = {
  url: PropTypes.shape().isRequired,
};

export default withRedux(initStore)(TestUrl);
