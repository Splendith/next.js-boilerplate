import withRedux from 'next-redux-wrapper';
import initStore from '~/src/store/';
import { Link } from '~/src/routes';

import Layout from '~/src/components/layout/Layout';
import Counter from '~/src/components/Counter';

const Index = () => (
  <Layout>
    <h1>Hello World!</h1>
    <Link route="/test/5?queryId=8">
      <a>Test link with /test/5?queryId=8</a>
    </Link>
    <Counter />
  </Layout>
);

export default withRedux(initStore)(Index);
