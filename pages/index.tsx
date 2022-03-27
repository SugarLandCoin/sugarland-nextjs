import * as React from 'react';
import type { NextPage } from 'next';
import { Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { useWallet } from 'use-wallet';
import FUSDContainer from './FUSD/index';

// const useStyles = makeStyles((theme: Theme) => ({
//   logo: {
//     width: 20,
//     height: 20,
//   },
// }));

const Home: NextPage = () => {
  // const classes = useStyles();
  // const wallet = useWallet();
  
  return (
    <Container maxWidth="xs">
      <FUSDContainer />
    </Container>
  );
};

export default Home;
