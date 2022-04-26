import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Web3 from 'web3';
import { Container, Grid, Box, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useYam } from '../hooks';
import { useWeb3 } from '../hooks';
import { GlobalContext } from '../contexts';
import { stringHelper } from '../helpers';

const COINGECKO = "/images/icons/Coingecko-icon.png";
const BCSSCAN = "/images/icons/BSCScan-icon.png";
const COINMARKETCAP = "/images/icons/Coinmarketcap-icon.png";
const POOCOIN = "/images/icons/Poocoin-icon.png";
const DEXTOOLS = "/images/icons/Dextools-icon.png";

const BSCNET = "https://bsc-dataseed2.binance.org/";

const GROWTHWALLET = "0x2C0F2e13a79fEE743A283b25892D32fc3Ea59317";
const ROYALTYWALLET = "0xa2f7DB7Fd092A676F8a3f88Ce9A41A51f9d2bd84";
const TREASURYWALLET = "0xbCBb5E17c7544571581ef33c2a7ED9808B966955";
const web3 = new Web3(BSCNET);

const useStyles = makeStyles(() => ({
  networkIconStyle: {
    color: 'white',
    display:'flex',
    alignItems:'center',
    marginRight: '3%',
    marginBottom:'2%',
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
    fontSize:'16px',
    fontWeight:'bold',
    lineHeight:'35px',
    marginRight:'10px',
    wordWrap:'break-word',
  },
  subContentStyle: {
    fontFamily:'Montserrat',
    fontSize:'20px',
    lineHeight:'35px',
    wordWrap:'break-word',
  },
  balanceTitleStyle: {
    fontFamily:'Montserrat',
    fontSize:'12px',
    fontWeight:'bold',
    lineHeight:'35px',
  },
  balanceContentStyle: {
    fontFamily:'Montserrat',
    fontSize:'18px',
    
    lineHeight:'35px',
  },
  boxBlurStyle: {
    marginLeft:'5%',
    padding: '5%',
    backgroundColor: 'rgba(78, 14, 238, 0.25)',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: '#AB6FE9',
    boxShadow: '0px 0px 2px 2px #AB6FE9',
  },
  boxlinkStyle: {
    marginTop:'5%',
    marginLeft: '2%',
    padding: '1%',
    borderRadius: '10px',
    background: 'linear-gradient(to bottom, rgba(78, 14, 238, 0.25), rgba(50,122, 231, 0.25))',
  },
  calcBoxStyle: {
    padding:'5%',
    height:'100%',
    borderRadius: '10px',
    background: 'linear-gradient(to bottom, rgba(78, 14, 238, 0.25), rgba(123,122, 231, 0.25))',
    marginBottom: '10%',
    marginLeft:'5%',
  },

}));

const Home: NextPage = () => {
  const classes = useStyles(); 
  const { numberWithCommas } = stringHelper;
  const { sugarPrice, tokenHolders, totalSupply, marketCap } = useContext(GlobalContext);
  const [ growthWalletAmount, setGrowthWalletAmount] = useState<number>(0);
  const [ royaltyWalletAmount, setRoyaltyWalletAmount] = useState<number>(0);
  const [ treasuryWalletAmount ,setTreasuryWalletAmount] = useState<number>(0);
  const [burntAmount, setBurntAmount] = useState<number>(0);
  const [yamRepeater,setYamRepeater]=useState<number>(0);  
  const yamClient = useYam();
  const web3Client = useWeb3();

  useEffect(() => {
    const getBurntAmount = async () => {
      if(yamClient != undefined) {
        const res = await yamClient.contracts.contractsMap['SUGAR'].methods.balanceOf('0x000000000000000000000000000000000000dead').call();
        setBurntAmount(res);
      }
    };
    // const { sugarPrice, tokenHolders, totalSupply, marketCap } = useContext(GlobalContext);
    getBurntAmount();
    setTimeout(() => setYamRepeater(prevState=>prevState+1), 10000);
  }, [yamRepeater]);

  
  useEffect(() => {
    const getExtraWallet = async () => {
      if(web3Client != undefined) {
        const res = await web3.eth.getBalance(GROWTHWALLET);
        setGrowthWalletAmount(Number(res) / 1000000000000000000);
        const res1 = await web3.eth.getBalance(ROYALTYWALLET);
        setRoyaltyWalletAmount(Number(res1) / 1000000000000000000);
        const res2 = await web3.eth.getBalance(TREASURYWALLET);
        setTreasuryWalletAmount(parseInt(res2) / 1000000000000000000);
      }
    };
    getExtraWallet();
    setTimeout(() => setYamRepeater(prevState=>prevState+1), 10000);
  }, [yamRepeater]);


  // useEffect(() => {
  //   const getExtraWallet = async () => {
  //     if(web3Client != undefined) {
  //       const res = await web3Client.contracts.contractsMap['BUSD'].methods.balanceOf(GROWTHWALLET).call();
  //       alert(res+"asdfadsf");
  //     }
  //   };
  //   getExtraWallet();
  //   setTimeout(() => setWeb3Repeater(prevState=>prevState+1), 10000);
  // }, [web3Repeater]);

  return (
    <Container className={classes.dashContainerStyle}>
      <Grid container spacing={6}>

      <Grid item xs={12} sx={{mb:5,}}>
          <Typography textAlign={'center'} variant='subtitle2'>SUGARLAND DASHBOARD</Typography>
        </Grid>

      <Grid container spacing={6}>
        <Grid lg={4} md={6} xs={12} item>
          <Box className={classes.calcBoxStyle}>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subTitleStyle}>Current Price </Typography>
              <Typography className={classes.subContentStyle}> $ {Number(sugarPrice).toFixed(6)}</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subTitleStyle}>Marketcap </Typography>
              <Typography className={classes.subContentStyle}> $ {Number(marketCap)}</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subTitleStyle}>Circulating Supply </Typography>
              <Typography className={classes.subContentStyle}>  {numberWithCommas(totalSupply)}</Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid lg={4} md={6} xs={12} item>  
          <Box className={classes.calcBoxStyle}>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subTitleStyle}>Burned Supply </Typography>
              <Typography className={classes.subContentStyle}> $ {numberWithCommas(burntAmount)}</Typography>
            </Grid>

            <Grid item sx={{mb:3,}}>
              <Typography  className={classes.subTitleStyle}>Burned Value </Typography>
              <Typography  className={classes.subContentStyle}> $ {numberWithCommas (Number(burntAmount) * Number(sugarPrice))}</Typography>
            </Grid>
          </Box>
          
        </Grid>

        <Grid lg={4} md={6} xs={12} item>  
          <Box className={classes.calcBoxStyle}>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subTitleStyle}>Holders </Typography>
              <Typography  className={classes.subContentStyle}> {numberWithCommas(tokenHolders)}</Typography>
            </Grid>

            <Grid item>
              <Typography className={classes.subTitleStyle}>Diamond Hands Who Never Sold </Typography>
              <Typography  className={classes.subContentStyle}> {numberWithCommas(648320)}</Typography>
            </Grid>
          </Box>
        </Grid>

      </Grid>

      <Grid container spacing={6} sx={{mt:1,}}>
        <Grid item lg={4} md={6} xs={12}>
          <Box className={classes.boxBlurStyle}>
            <Typography className={classes.balanceTitleStyle}>Growth Wallet Balance</Typography>
            <Typography className={classes.balanceContentStyle}>$ {growthWalletAmount}</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Box className={classes.boxBlurStyle}>
            <Typography className={classes.balanceTitleStyle}>Royalty Wallet Balance</Typography>
            <Typography className={classes.balanceContentStyle}>$ {royaltyWalletAmount}</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Box className={classes.boxBlurStyle}>
            <Typography className={classes.balanceTitleStyle}>Moonshot Wallet Balance</Typography>
            <Typography className={classes.balanceContentStyle}>$ {treasuryWalletAmount}</Typography>
          </Box>
        </Grid>
      </Grid>


      
      <Grid container lg={12} spacing={6} className={classes.boxlinkStyle}>
        <Grid lg={2} md={6} xs={12} className={classes.networkIconStyle}>
          <Image alt="coingecko" src={COINGECKO} width={'40px'} height={'40px'}/>
          <Link href='https://www.coingecko.com/' passHref>
            <Typography className={classes.subTitleStyle} sx={{ml:2,}}>CoinGecko</Typography>
          </Link>
        </Grid>

        <Grid lg={2} md={6} xs={12} className={classes.networkIconStyle}>
          <Image alt="bsc" src={BCSSCAN} width={'40px'} height={'40px'}/>
          <Link href='https://bscscan.com/' passHref>
            <Typography className={classes.subTitleStyle} sx={{ml:2,}}>BSCScan</Typography>
          </Link>
        </Grid>

        <Grid lg={2} md={6} xs={12} className={classes.networkIconStyle}>
          <Image alt="cmc" src={COINMARKETCAP} height={'40px'}  width={'40px'} layout={'fixed'}/> 
          <Link href='https://coinmarketcap.com/' passHref>
            <Typography className={classes.subTitleStyle} sx={{ml:2,}}>CoinMarketCap</Typography>
          </Link>
        </Grid>

        <Grid lg={2} md={6} xs={12} className={classes.networkIconStyle}>
          <Image alt="cmc" src={DEXTOOLS} width={'40px'} height={'40px'} /> 
          <Link href='https://www.dextools.io/' passHref>
            <Typography className={classes.subTitleStyle} sx={{ml:2,}}>Dextools</Typography>
          </Link>
        </Grid>

        <Grid lg={2} md={6} xs={12} className={classes.networkIconStyle}>
          <Image alt="cmc" src={POOCOIN} width={'40px'} height={'40px'}/>   
          <Link href='https://poocoin.app/' passHref>
            <Typography className={classes.subTitleStyle} sx={{ml:2,}}>Poocoin</Typography>
          </Link>
        </Grid>

      </Grid>
    </Grid>
    </Container>
  );
};

export default Home;
