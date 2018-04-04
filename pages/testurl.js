import withRedux from 'next-redux-wrapper';
import initStore from '~/src/store/';
import { Link } from '~/src/routes';

import PropTypes from 'prop-types';
import Layout from '~/src/components/layout/Layout';
import Counter from '~/src/components/Counter';

const TestUrl = props => (
  <Layout>
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
