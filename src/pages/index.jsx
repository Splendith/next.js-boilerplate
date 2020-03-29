import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Link } from '~/routes';

// Styled component element
import Title from '~src/components/elements/Title';

// Dynamic import
const CounterPage = dynamic(import('~src/components/CounterPage'));

const Image = styled.div`
  margin-bottom: 1.5rem;
`;

const Welcome = styled.p`
  color: ${({ theme }) => theme.indigo}; /* Theme from src/styles/js/themes/Default.js */
`;

const Index = () => (
  <CounterPage>
    <Head>
      <title>Hello world!</title>
    </Head>
    <Title>Hello world!</Title>
    <Image>
      <img src="/static/img/smile.png" alt="Smile" />
    </Image>
    <Welcome>Welcome to this website!</Welcome>
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
