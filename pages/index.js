import withRedux from 'next-redux-wrapper';
import initStore from '~/src/store/';
import { Link } from '~/src/routes';

import Layout from '~/src/components/layout/Layout';
import Counter from '~/src/components/Counter';

import styled from 'styled-components';

const Header = styled.h1`
  color: blue;
  &:hover {
    color: lightskyblue;
  }
`;

const Index = () => (
  <Layout>
    <Header>Hello! Hover me~</Header>
    <Link route="/test/5?queryId=8">
      <a>Test link with /test/5?queryId=8</a>
    </Link>
    <Counter />
  </Layout>
);

export default withRedux(initStore)(Index);
