import React from 'react';
import Head from 'next/head';


import Header from '../components/Header';
import Links from '../components/Links';
import { Container } from './styles';
import { getLinks } from '../logic/requests/links';

interface Props {
  data: [
    {
      id: number;
      title: string;
      url: string;
    }
  ]
}

const Index: React.SFC<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Gosch</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <Header />
        <Links data={data} />
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const data = await getLinks();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } }
}

export default Index;
