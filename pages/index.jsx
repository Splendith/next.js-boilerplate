import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Link } from '~/routes';

// Styled component element
import Title from '@/components/elements/Title';

// Sample ES6 import
import smile from '~/static/img/smile.png';

// Dynamic import
import CounterPage from '@/components/CounterPage';
// const CounterPage = dynamic(import('@/components/CounterPage'));

const Image = styled.div`
  margin-bottom: 2rem;
`;

const Index = () => (
  <CounterPage>
    <Head>
      <title>Hello world!</title>
    </Head>
    <Title>Hello world!</Title>
    <Image>
      <img src={smile} alt="Smile" />
    </Image>
    <Link route="/test/5?queryId=8">
      <a>route=&ldquo;/test/5?queryId=8&ldquo;</a>
    </Link>
    <br />
    <Link route="testurl" params={{ id: 7, queryId: 9 }}>
      <a>route=&ldquo;testurl&ldquo; params=&#123;&#123; id: 7, queryId: 9 &#125;&#125;</a>
    </Link>
  </CounterPage>
);

export default Index;
