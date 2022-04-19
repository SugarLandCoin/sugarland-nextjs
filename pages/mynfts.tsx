import * as React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { Container, Grid, Typography, Box} from '@mui/material';
import { makeStyles } from "@mui/styles";
import {useYam} from "../hooks";
import { GlobalContext, Web3ModalContext } from '../contexts';

import imageCitizen from '../public/images/citizen.png';
const useStyles = makeStyles(() => ({
  customBoxStyle: {
    backgroundColor: 'rgba(47, 19, 74, 0.25)',
    padding:'2%',
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
  mynftContainerStyle: {
    marginTop:'100px',
    marginLeft:'5%',
  },
}));

const Mynfts: NextPage = () => {
  const classes = useStyles();
  const globalContext = useContext(GlobalContext);
  const { account } = useContext(Web3ModalContext);
  const [diamondCounts,setDiamondCounts] = useState<number[]>([]);
  const [citizenCounts,setCitizenCounts] = useState<number[]>([]);
  const sugarPrice = globalContext.sugarPrice == null ? 0 : globalContext.sugarPrice;
  const yamClient = useYam();

  useEffect(() => {
    const getMyNFTs = async () => {
      try {
        if(yamClient != undefined) {

          const nftCount: number[] = new Array(6);
          for(let i=1; i<=6; i++){
            const temp = await yamClient.contracts.contractsMap['SugarNFT'].methods.balanceOf(account, i);
            nftCount[i] = temp;
            console.log(nftCount[i] + ":Diamondsssss");
          }
          setDiamondCounts(nftCount);
          // console.log(diamondCounts + ":Diamondsssss");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMyNFTs();
  }, [yamClient]);

  return (
    <Container className={classes.mynftContainerStyle}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
        <Box className={classes.customBoxStyle}>
          <Grid container xs={12}>
              <Grid item xs={6}>
                      <Grid item sx={{mb:6}}>
                          <Typography className={classes.titleStyle} variant="subtitle2" >Diamond NFTs</Typography>
                      </Grid>
              </Grid>
              <Grid item xs={6}>
              </Grid>
            </Grid>
            <Grid container xs={12}>
              
            </Grid>
          </Box>
        </Grid>

       <Grid item xs={12}>
        <Box className={classes.customBoxStyle}>
          <Grid container xs={12}>
              <Grid item xs={6}>
                      <Grid item sx={{mb:6}}>
                          <Typography className={classes.titleStyle} variant="subtitle2" >3D Citizen NFTs</Typography>
                      </Grid>
              </Grid>
              <Grid item xs={6}>
              </Grid>
            </Grid>
            <Grid container xs={12}>
              
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mynfts;