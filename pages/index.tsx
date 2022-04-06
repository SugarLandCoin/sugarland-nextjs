import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Grid, Box, Typography } from '@mui/material';

import { useWeb3 } from '../hooks';
import { GlobalContext } from '../contexts';
import { stringHelper } from '../helpers';

const COINGECKO = "/images/icons/Coingecko-icon.png";
const BCSSCAN = "/images/icons/BSCScan-icon.png";
const COINMARKETCAP = "/images/icons/Coinmarketcap-icon.png";
const POOCOIN = "/images/icons/Poocoin-icon.png";
const DEXTOOLS = "/images/icons/Dextools-icon.png";


const Home: NextPage = () => {
  const { numberWithCommas } = stringHelper;
  const { sugarPrice, tokenHolders, totalSupply, marketCap } = useContext(GlobalContext);
  const [burntAmount, setBurntAmount] = useState<number>(0);
  const web3Client = useWeb3();

  useEffect(() => {
    const getBurntAmount = async () => {
      if(web3Client != undefined) {
        const res = await web3Client.contracts.contractsMap['SUGAR'].methods.balanceOf('0x000000000000000000000000000000000000dead').call();
        setBurntAmount(res);
      }
    };
    getBurntAmount();
  }, []);

  const calcCurrentContainerStyle = {
    mt: 10,
    marginLeft:'2rem',
    marginRight:'2rem',
    p: 5,
  };
  const typoStyle = {
    fontSize: '20px',
    lineHeight: '30px',
  };
  const calcBoxStyle = {
    p:5,
    borderRadius: 3,
    height:'100%',
    backgroundColor: 'rgba(47, 19, 74, 0.25)',
    overflow:'auto',
    overflowY:'hidden',
  };
  const networkIconStyle = {
    color: 'white',
    display:'flex',
    alignItems:'center',
    marginBottom:'1%',
    marginTop:'1%',
  }; 

  return (
    <Container maxWidth="xl" sx={calcCurrentContainerStyle}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography textAlign={'center'}>SUGARLAND DASHBOARD</Typography>
        </Grid>
        <Grid md={6} xs={12} item>
          <Box sx={calcBoxStyle}>
            <Grid item container>
              <Typography sx={typoStyle} variant='subtitle2'>Current Price - </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> $ {Number(sugarPrice).toFixed(6)}</Typography>
            </Grid>
            <Grid item container>
              <Typography sx={typoStyle} variant='subtitle2'>Marketcap </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> $ {Number(marketCap).toFixed(0)}</Typography>
            </Grid>
            <Grid item container>
              <Typography sx={typoStyle} variant='subtitle2'>Circulating Supply - </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> $ {numberWithCommas(totalSupply)}</Typography>
            </Grid>
            <Grid container>
              <Typography sx={typoStyle} variant='subtitle2'>Burned Supply - </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> {Number(burntAmount).toFixed(6)}</Typography>
            </Grid>
            <Grid container>
              <Typography sx={typoStyle} variant='subtitle2'>Burned Value - </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> {Number(burntAmount).toFixed(6)}</Typography>
            </Grid>

          </Box>
        </Grid>

        <Grid md={6} xs={12} item>  
          <Box sx={calcBoxStyle}>
            <Grid item container>
              <Typography sx={typoStyle} variant='subtitle2'>Holders</Typography>
              <Typography sx={typoStyle} variant='subtitle2'>{numberWithCommas(tokenHolders)}</Typography>
            </Grid>

          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3,}}>
            <Typography >Growth Wallet Balance</Typography>
            <Typography variant='subtitle2'>${numberWithCommas(totalSupply)}</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3, }}>
            <Typography >Royalty Wallet Balance</Typography>
            <Typography variant='subtitle2'>${numberWithCommas(marketCap)}</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3, }}>
            <Typography >Moonshot Wallet Balance</Typography>
            <Typography variant='subtitle2'>${numberWithCommas(marketCap)}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} >
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3, pl: 10,}}>
            <Grid xs={12} container>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="coingecko" src={COINGECKO} width={'40px'} height={'40px'}/>
                <Link href='https://www.coingecko.com/' passHref>
                  <Typography variant='subtitle2'>CoinGecko</Typography>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="bsc" src={BCSSCAN} width={'40px'} height={'40px'}/>
                <Link href='https://bscscan.com/' passHref>
                  <Typography variant='subtitle2'>BSCScan</Typography>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="cmc" src={COINMARKETCAP} width={'40px'} height={'40px'} /> 
                <Link href='https://coinmarketcap.com/' passHref>
                  <Typography variant='subtitle2'>CoinMarketCap</Typography>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="cmc" src={POOCOIN} width={'40px'} height={'40px'} />   
                <Link href='https://coinmarketcap.com/' passHref>
                  <Typography variant='subtitle2'>Poocoin</Typography>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="cmc" src={DEXTOOLS} width={'40px'} height={'40px'} /> 
                <Link href='https://www.dextools.io/' passHref>
                  <Typography variant='subtitle2'>Dextools</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

