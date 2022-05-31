import * as React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import { Container, Grid, Typography, Box, Button} from '@mui/material';
import { makeStyles } from "@mui/styles";

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
    width:'80%',
    fontSize:'12px',
    height:'auto',
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


const Market: NextPage = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="xl" sx={{mt: 20, ml:5,  p: 0, pl:0, pr: 0, justifyContent: 'center', alignItems: 'center'}}>

      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={3}>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box className={classes.customBoxStyle}>
            <Grid item sx={{mb:6}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >LIST NFTS</Typography>
            </Grid>
            <Grid item sx={{mb:3}}>
              <Typography className={classes.subContentStyle}>...</Typography>
            </Grid>
            <Grid item>
              <Grid item sx={{mb:4}} xs={12}>
                <Link href='/create' passHref>
                  <Button className={classes.customButtonStyle}>LIST</Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box className={classes.customBoxStyle}>
            <Grid item sx={{mb:6}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >EXPLORE  NFT</Typography>
            </Grid>
            <Grid item sx={{mb:3}}>
            
              <Typography className={classes.subContentStyle}>...</Typography>
            </Grid>

            <Grid item>
              {/* <Grid item sx={{mb:3}}>
                <Typography className={classes.subContentStyle}>...</Typography>
              </Grid>
               */}
              <Grid item>
                <Grid item sx={{mb:4}} xs={12}>
                  <Button className={classes.customButtonStyle}>EXPLORE</Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
        </Grid>        
      </Grid>

    </Container>
  );
};

export default Market;
