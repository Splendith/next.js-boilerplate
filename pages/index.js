import withRedux from 'next-redux-wrapper';
import initStore from '~/store/';
import { Link } from '~/routes';
import Head from 'next/head';

import Layout from '~/components/layout/Layout';
import Counter from '~/components/Counter';

import styled from 'styled-components';

// Image
import smile from './img/smile.png';
import bg from './img/bg.png';

const Header = styled.h1`
  color: blue;
  &:hover {
    color: lightskyblue;
  }
  font-family: 'Lato';
  background: url(${bg});
`;

const Image = styled.img`
  display: block;
  margin: 2rem 0;
`;

export const Index = () => (
  <Layout>
    <Head>
      <title>Hello world!</title>
    </Head>
    <Header>Hello! Hover me~</Header>
    <Image src={smile} alt="Smile" />
    <Link route="/test/5?queryId=8">
      <a>Test link with /test/5?queryId=8</a>
    </Link>
    <Counter />
  </Layout>
);

export default withRedux(initStore)(Index);
