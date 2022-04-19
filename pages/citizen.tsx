import * as React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Container, Grid, Typography, Box} from '@mui/material';
import { makeStyles } from "@mui/styles";

import imageCitizen from '../public/images/citizen.png';
const useStyles = makeStyles(() => ({
  customBoxStyle: {
    backgroundColor: 'rgba(47, 19, 74, 0.25)',
    padding: '7%',
    borderRadius: '10px',
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

const Citizen: NextPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.rewardContainerStyle}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
            <Grid item xs={12}>
                <Box className={classes.customBoxStyle}>
                    <Grid item sx={{mb:6}}>
                    <Typography className={classes.titleStyle} variant="subtitle2" >3D Citizen NFTs</Typography>
                    </Grid>
                    <Grid item sx={{mb:3}}>
                    <Typography className={classes.subContentStyle}>Governance - Power to vote , review & rate project.</Typography>
                    </Grid>
                    <Grid item>
                    <Typography className={classes.subtitleStyle} variant="subtitle2" >Minting coming soon.</Typography>
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ml:3, mt:6}}>
                <Grid>
                <Typography className={classes.titleStyle} variant="subtitle2" >Each CITIZENS NFT equals one VOTE</Typography>
                </Grid>
                <Grid item sx={{mb:3}}>
                <Typography className={classes.subContentStyle}>Holding a Sugarland Citizen NFT unlocks the power to suggest projects from across the cryptoverse that, once approved, can be rated by the rest of the community!
                In addition, Citizen NFT holders will earn rewards for contributing and will receive airdrops, and more from partner projects.</Typography>
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Image alt="citizen" src={imageCitizen}/>
        </Grid>        
      </Grid>
    </Container>
  );
};

export default Citizen;