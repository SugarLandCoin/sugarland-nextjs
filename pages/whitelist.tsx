import * as React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Container, Grid, Typography, Box} from '@mui/material';
import { makeStyles } from "@mui/styles";

import unlockNFT from '../public/images/unlockNFT1.png';
const useStyles = makeStyles(() => ({
  customBoxStyle: {
    backgroundColor: 'rgba(47, 19, 74, 0.25)',
    padding: '7%',
    borderRadius: '10px',
    height: '100%',
  },

  customButtonStyle: {
    color:'white',
    borderRadius: '10px',
    background:'#471D67',
    borderColor:'#AB6FE9',
    borderWidth:'1px',
    borderStyle:'solid',
    width:'50%',
    fontSize:'12px',
  },

  titleStyle: {
    fontSize:'30px',
    lineHeight:'40px',
    wordWrap:'break-word',
  },

  subtitleStyle: {
    fontSize:'20px',
    wordWrap:'break-word',
  },

  subContentStyle: {
    fontSize:'20px',
    wordWrap:'break-word',
  },

  subDescriptionStyle: {
    fontSize:'12px',
    wordWrap:'break-word',
  },
  
  rewardContainerStyle: {
    marginTop:'100px',
    marginLeft:'5%',
    wordWrap:'break-word',
  },
}));

const Soon: NextPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.rewardContainerStyle}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box className={classes.customBoxStyle}>
            <Grid item sx={{mb:6}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >Unlock the power of Surgarland partnerships!</Typography>
            </Grid>
            <Grid item sx={{mb:3}}>
              <Typography className={classes.subContentStyle}>Snag a Sugarland WhiteList Pass NFT and be first in line for any partnership-generated ‘Right to Whitelist’ opportunities!</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Minting Coming Soon.</Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Image alt="whitelist" src={unlockNFT}/>
        </Grid>        
      </Grid>
    </Container>
  );
};

export default Soon;