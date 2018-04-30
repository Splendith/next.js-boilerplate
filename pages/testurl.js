import Head from 'next/head';
import PropTypes from 'prop-types';
import { Link } from '~/routes';

import CounterPage from '~/components/CounterPage';

const TestUrl = props => (
  <CounterPage>
    <Head>
      <title>Test URL</title>
    </Head>
    <h2>URL Result</h2>
    <div>
      ID: {props.router.query.id}, Query ID: {props.router.query.queryId}
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

export default TestUrl;
