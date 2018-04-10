import Head from 'next/head';
import styled from 'styled-components';

import withRedux from 'next-redux-wrapper';
import initStore from '~/store/';
import { Link } from '~/routes';

import Layout from '~/components/layout/Layout';
import CounterPage from '~/components/CounterPage';

// Sample ES6 import
import smile from './img/smile.png';

const Title = styled.h1`
  font-size: 2.2rem;
`;

const Image = styled.div`
  margin-bottom: 2rem;
`;

export const Index = () => (
  <Layout>
    <CounterPage>
      <Head>
        <title>Hello world!</title>
      </Head>
      <Title>Hello world!</Title>
      <Image>
        <img src={smile} alt="Smile" />
      </Image>
      <Link route="/test/5?queryId=8">
        <a>Test link with /test/5?queryId=8</a>
      </Link>
    </CounterPage>
  </Layout>
);

export default withRedux(initStore)(Index);
