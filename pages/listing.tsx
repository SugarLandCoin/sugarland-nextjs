import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Typography} from '@mui/material';
const Listing: NextPage = () => {

  return (
    <Container maxWidth="xl" sx={{mt: 3, ml:5,  p: 0, pl:0, pr: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant='h4'>Access with 10,000 SUGAR</Typography>    
      <Typography variant='h4'>Coming Soon...</Typography>    
    </Container>
  );
};

export default Listing;

