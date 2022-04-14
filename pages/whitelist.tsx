import * as React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Container, Grid, Typography, Button, Box, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";

import unlockNFT from '../public/images/unlockNFT1.png';
const useStyles = makeStyles(() => ({
  customBoxStyle: {
    backgroundColor: 'rgba(47, 19, 74, 0.25)',
    padding: '7%',
    borderRadius: '10px',
    height:'100%',
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
  },
  subtitleStyle: {
    fontSize:'20px',
  },
  subContentStyle: {
    fontSize:'20px',
  },
  subDescriptionStyle: {
    fontSize:'12px',
  },
  rewardContainerStyle: {
    marginTop:'100px',
    marginLeft:'5%',
  },
}));

const whitelist: NextPage = (props) => {

  const title = props;
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
              <Typography className={classes.subContentStyle}>Snag a Sugarland WhiteList Pass NFT and be first in line for any partnership-generated ‘Right to Mint’ opportunities!</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Minting ComingSoon</Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Image src={unlockNFT}/>
        </Grid>        
      </Grid>
    </Container>
  );
};

export default whitelist;