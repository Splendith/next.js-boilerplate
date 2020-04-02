import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Styled component element
import Title from '~src/components/elements/Title';

// Dynamic import
const CounterPage = dynamic(import('~src/components/CounterPage'));

const TestUrl = () => {
  const router = useRouter();
  console.log(router.query);
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
      <Link href="/">
        <a>Back to index</a>
      </Link>
    </CounterPage>
  );
};

export default TestUrl;
