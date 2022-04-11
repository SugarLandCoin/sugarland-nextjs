import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Grid, Box, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useYam } from '../hooks';
import { GlobalContext } from '../contexts';
import { stringHelper } from '../helpers';

const COINGECKO = "/images/icons/Coingecko-icon.png";
const BCSSCAN = "/images/icons/BSCScan-icon.png";
const COINMARKETCAP = "/images/icons/Coinmarketcap-icon.png";
const POOCOIN = "/images/icons/Poocoin-icon.png";
const DEXTOOLS = "/images/icons/Dextools-icon.png";

const useStyles = makeStyles(() => ({
  networkIconStyle: {
    color: 'white',
    display:'flex',
    alignItems:'center',
    marginBottom:'1%',
    marginTop:'1%',
  },
  inRowStyle: {
    display:'flex',
  },
  iconStyle: {

    justifyContent:'center',
  },
  dashContainerStyle: {
    marginTop:'100px',
    marginLeft:'5%',
  },
  subTitleStyle: {
    fontFamily:'Montserrat',
    fontSize:'18px',
    fontWeight:'bold',
    lineHeight:'35px',
    marginRight:'10px',
  },
  subContentStyle: {
    fontFamily:'Montserrat',
    fontSize:'18px',
    fontWeight:'bold',
    lineHeight:'35px',
  },
  balanceTitleStyle: {
    fontFamily:'Montserrat',
    fontSize:'12px',
    fontWeight:'bold',
    lineHeight:'35px',
  },
  balanceContentStyle: {
    fontFamily:'Montserrat',
    fontSize:'20px',
    fontWeight:'bold',
    lineHeight:'35px',
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();

  const { numberWithCommas } = stringHelper;
  const { sugarPrice, tokenHolders, totalSupply, marketCap } = useContext(GlobalContext);
  const [burntAmount, setBurntAmount] = useState<number>(0);
  const [repeater,setRepeater]=useState<number>(0);
  const yamClient = useYam();

  useEffect(() => {
    const getBurntAmount = async () => {
      if(yamClient != undefined) {
        const res = await yamClient.contracts.contractsMap['SUGAR'].methods.balanceOf('0x000000000000000000000000000000000000dead').call();
        setBurntAmount(res);
      }
    };
    // const { sugarPrice, tokenHolders, totalSupply, marketCap } = useContext(GlobalContext);
    getBurntAmount();
    setTimeout(() => setRepeater(prevState=>prevState+1), 10000);
  }, [repeater]);

  const calcCurrentContainerStyle = {
    mt: 10,
    marginLeft:'2rem',
    marginRight:'2rem',
    p: 5,
  };
  const calcBoxStyle = {
    p:5,
    borderRadius: 3,
    height:'100%',
    backgroundColor: 'rgba(47, 19, 74, 0.25)',
    
  };

  return (
    <Container className={classes.dashContainerStyle}>
      <Grid container spacing={6}>
        <Grid item xs={12} >
          <Typography textAlign={'center'} variant='subtitle2'>SUGARLAND DASHBOARD</Typography>
        </Grid>
        <Grid md={6} xs={12} item>
          <Box sx={calcBoxStyle}>
            <Grid item className={classes.inRowStyle}>
              <Typography className={classes.subTitleStyle}>Current Price </Typography>
              <Typography className={classes.subContentStyle}> ${Number(sugarPrice).toFixed(6)}</Typography>
            </Grid>
            <Grid item className={classes.inRowStyle}>
              <Typography className={classes.subTitleStyle}>Marketcap </Typography>
              <Typography className={classes.subContentStyle}> ${Number(marketCap)}</Typography>
            </Grid>
            <Grid item className={classes.inRowStyle}>
              <Typography className={classes.subTitleStyle}>CirculatingSupply </Typography>
              <Typography className={classes.subContentStyle}> ${numberWithCommas(totalSupply)}</Typography>
            </Grid>
            <Grid item className={classes.inRowStyle}>
              <Typography className={classes.subTitleStyle}>Burned Supply </Typography>
              <Typography className={classes.subContentStyle}> ${numberWithCommas(burntAmount)}</Typography>
            </Grid>
            <Grid item className={classes.inRowStyle}>
              <Typography  className={classes.subTitleStyle}>Burned Value </Typography>
              <Typography  className={classes.subContentStyle}> ${numberWithCommas (Number(burntAmount) * Number(sugarPrice))}</Typography>
            </Grid>
            
          </Box>
        </Grid>

        <Grid md={6} xs={12} item>  
          <Box sx={calcBoxStyle}>
            <Grid item className={classes.inRowStyle}>
              <Typography className={classes.subTitleStyle}>Holders </Typography>
              <Typography  className={classes.subContentStyle}> {numberWithCommas(tokenHolders)}</Typography>
            </Grid>

          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 2, borderRadius: 3,}}>
            <Typography className={classes.balanceTitleStyle}>Growth Wallet Balance</Typography>
            <Typography className={classes.balanceContentStyle}>$110</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 2, borderRadius: 3, }}>
            <Typography className={classes.balanceTitleStyle}>Royalty Wallet Balance</Typography>
            <Typography className={classes.balanceContentStyle}>$110</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 2, borderRadius: 3, }}>
            <Typography className={classes.balanceTitleStyle}>Moonshot Wallet Balance</Typography>
            <Typography className={classes.balanceContentStyle}>$110</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} >
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 2, borderRadius: 3, pl: 10,}}>
            <Grid xs={12} container>
              <Grid item xs={12} md={4} className={classes.networkIconStyle}>
                <Image alt="coingecko" src={COINGECKO} width={'40px'} height={'40px'}/>
                <Link href='https://www.coingecko.com/' passHref>
                  <Typography className={classes.subTitleStyle} sx={{ml:2,}}>CoinGecko</Typography>
                </Link>
              </Grid>
              <Grid item xs={12} md={4} className={classes.networkIconStyle}>
                <Image alt="bsc" src={BCSSCAN} width={'40px'} height={'40px'}/>
                <Link href='https://bscscan.com/' passHref>
                  <Typography className={classes.subTitleStyle} sx={{ml:2,}}>BSCScan</Typography>
                </Link>
              </Grid>
              <Grid item xs={12} md={4} className={classes.networkIconStyle}>
                <Image alt="cmc" src={COINMARKETCAP} width={'40px'} height={'40px'} /> 
                <Link href='https://coinmarketcap.com/' passHref>
                  <Typography className={classes.subTitleStyle} sx={{ml:2,}}>CoinMarketCap</Typography>
                </Link>
              </Grid>
              <Grid item xs={12} md={4} className={classes.networkIconStyle}>
                <Image alt="cmc" src={POOCOIN} width={'30px'} height={'40px'}/>   
                <Link href='https://coinmarketcap.com/' passHref>
                  <Typography className={classes.subTitleStyle} sx={{ml:2,}}>Poocosasdin</Typography>
                </Link>
              </Grid>
              <Grid  item xs={12} md={4} className={classes.networkIconStyle}>
                <Image alt="cmc" src={DEXTOOLS} width={'40px'} height={'40px'} /> 
                <Link href='https://www.dextools.io/' passHref>
                  <Typography className={classes.subTitleStyle} sx={{ml:2,}}>Dextools</Typography>
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

