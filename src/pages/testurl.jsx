import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Link } from '~/routes';

// Styled component element
import Title from '~src/components/elements/Title';

// Dynamic import
const CounterPage = dynamic(import('~src/components/CounterPage'));

const TestUrl = () => {
  const router = useRouter();
  return (
    <CounterPage>
      <Head>
        <title>Test URL</title>
      </Head>
      <Title>URL Result</Title>
      <div>
        ID: {router.query.id}, Query ID: {router.query.queryId}
      </div>
      <br />
      <Link route="/">
        <a>Back to index</a>
      </Link>
    </CounterPage>
  );
};

export default TestUrl;
