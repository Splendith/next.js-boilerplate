import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Link from '~src/components/Link';

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

const Index: React.FunctionComponent = () => (
  <CounterPage>
    <Head>
      <title>Hello world!</title>
    </Head>
    <Title>Hello world!</Title>
    <Image>
      <img src="/static/img/smile.png" alt="Smile" />
    </Image>
    <Welcome>Welcome to this website!</Welcome>
    <Link pathname="testurl" items={[['id', 5]]} query={{ queryId: 8 }}>
      <a>route=&ldquo;/test/5?queryId=8&ldquo;</a>
    </Link>
  </CounterPage>
);

export default Index;
