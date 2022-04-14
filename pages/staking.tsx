import * as React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Container, Grid, Typography, Button, Box} from '@mui/material';
import { makeStyles } from "@mui/styles";

import imageDoken from '../public/images/doken.png';
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
    height:'auto%',
    fontSize:'12px',
  },
  titleStyle: {
    fontSize:'30px',
    lineHeight:'40px',
    wordWrap:'break-word',
  },
  subtitleStyle: {
    fontSize:'17px',
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

const Staking: NextPage = () => {

  const classes = useStyles();
  return (
    <Container className={classes.rewardContainerStyle}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box className={classes.customBoxStyle}>
            <Grid item sx={{mb:6}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >STACKING PARTNERS</Typography>
            </Grid>
            <Grid item sx={{mb:3}}>
              <Image alt="doken" src={imageDoken} width={'200px'} height={'40px'}/>
            </Grid>
            <Grid item sx={{mb:4}}>
              <Button className={classes.customButtonStyle}>Open DokenDojo</Button>
            </Grid>
            <Grid item sx={{mb:1}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Duration</Typography>
              <Typography className={classes.subContentStyle}>10Days</Typography>
            </Grid>
            <Grid item sx={{mb:5}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Stake SUGAR - Earn BUSD </Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className={classes.customBoxStyle}>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >SUGAR STAKING POOLS ARE UNDER CONSTRUCTION</Typography> 
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subtitleStyle} >Stay turned!</Typography>
            </Grid>
          </Box>
        </Grid>        
      </Grid>
    </Container>
  );
};

export default Staking;