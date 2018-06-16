import Head from 'next/head';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Link } from '~/routes';

// Styled component element
import Title from '~/components/elements/Title';

// Dynamic import
const CounterPage = dynamic(import('~/components/CounterPage'));

const TestUrl = props => (
  <CounterPage>
    <Head>
      <title>Test URL</title>
    </Head>
    <Title>URL Result</Title>
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

export default withRouter(TestUrl);
