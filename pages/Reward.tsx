import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Grid, Typography, Button, Box, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  customInput: {
    background: 'white',
    borderRadius: '10px',
    color:'red',
    borderStyle:'none',
    borderColor:'transparent',
    width:'100%',
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
    fontSize:'15px',
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

const Reward: NextPage = () => {

  const classes = useStyles();
  return (
    <Container className={classes.rewardContainerStyle}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3,}}>
            <Grid item sx={{mb:8}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >CHECK YOUR REFLECTIONS</Typography>
            </Grid>
            <Grid item sx={{mb:3}}>
              <TextField
              className={classes.customInput}
              />
            </Grid>
            <Grid item sx={{mb:4}}>
              <Button className={classes.customButtonStyle}>Enter Wallet</Button>
            </Grid>
            <Grid item sx={{mb:3}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Reflections Amount</Typography>
              <Typography className={classes.subContentStyle}>648320</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Reflections value</Typography>
              <Typography className={classes.subContentStyle}>648320</Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3,}}>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >CHECK YOUR DIAMOND NFT REWARDS</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Rewards Collected</Typography>
              <Typography className={classes.subContentStyle}>648320</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Rewards Value</Typography>
              <Typography className={classes.subContentStyle}>648320</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Button className={classes.customButtonStyle}>Claim Rewards</Button>
            </Grid>
            <Grid item sx={{mb:1,}}>
              <Typography className={classes.subDescriptionStyle}>
              Claim every 24 hours.
              <br/>
              Rewards will be lost if not claimed in 30days.
              </Typography>
            </Grid>
          </Box>
        </Grid>        
      </Grid>
    </Container>
  );
};

export default Reward;