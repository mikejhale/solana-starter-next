import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AppBar } from '../components/AppBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <title>My Solana App</title>
      </Head>
      <AppBar />
      <Box>
        <Heading as='h1' size='l' ml={4} mt={8}>
          Put the app here
        </Heading>
      </Box>
    </div>
  );
};

export default Home;
