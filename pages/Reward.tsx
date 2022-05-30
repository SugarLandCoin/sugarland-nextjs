import * as React from 'react';
import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { Container, Grid, Typography, Button, Box, TextField } from '@mui/material';
import { GlobalContext, Web3ModalContext } from '../contexts';
import { makeStyles } from "@mui/styles";
import { useReflection } from '../hooks';
import { useYam } from '../hooks';
import { stringHelper } from '../helpers';


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
    height:'auto',
  },
  titleStyle: {
    fontSize:'30px',
    lineHeight:'40px',
    wordWrap:'break-word',
  },
  subtitleStyle: {
    fontSize:'15px',
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

const Reward: NextPage = () => {
  const { numberWithCommas } = stringHelper;
  const { account } = useContext(Web3ModalContext);
  const  {fetchReflection} = useReflection(account);  
  const [addressInputValue, setAddressInputValue] = useState<any>();
  const [reflectionAmount, setReflectionAmount] = useState<any>(0);
  const [reflectionValue, setReflectionValue] = useState<any>(0);

  const [rewardAmount, setRewardAmount] = useState<any>(0);
  const [rewardValue, setRewardValue] = useState<number>(0);
  const [tempValue,setTempValue] = useState<any>(0);
  const [curPrice, setCurPrice] = useState<any>(0);
  const [rewardsPerDay , setRewardsPerDay] = useState<number[]>([]);
  const [claimButtonStatus, setClaimButtonStatus] = useState<boolean>(false);
  const yamClient = useYam();

  // useEffect(() => {
  //   const getSellingStatus = async () => {
  //     try {
  //       if(yamClient != undefined) {
  //         const nftCount: number[] = new Array(6).fill(0);
  //         for(let i = 0; i < 6; i++){
  //           const temp = await yamClient.contracts.contractsMap['SugarNFT'].methods.balanceOf(account, i+1).call();
  //           nftCount[i] = temp;
  //         } 
  //         setDiamondCounts(nftCount);

  //         const rewards: number[] = new Array(6).fill(0);
  //         for(let i = 0; i < 6; i++){
  //           const temp = await yamClient.contracts.contractsMap['REWARD'].methods.getRewardsPerDay(i+1).call();
  //           rewards[i] = temp / 1000000000;
  //         } 
  //         setRewardsPerDay(rewards);

  //         const sugarReflection = await fetchReflection();
  //         if(sugarReflection != undefined) {
  //         const res = sugarReflection.curPrice;
  //         setCurPrice(res);

  //         let sum = 0 ;
  //         for(let i = 0; i < 6; i ++) { 
  //           sum += nftCount[i] * rewards[i];
  //         }
  //         setRewardAmount(sum);
  //         setRewardValue(sum * res);          
  //         }
  //       } 
  //     } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getSellingStatus();
  //   }, [yamClient]);

    useEffect(() => {
      const ClaimInit = async () => {
        try {
          if(yamClient != undefined) {
              const temp = await yamClient.contracts.contractsMap['REWARD'].methods.g_userInfo(account).call();
              const temp1 = await yamClient.contracts.contractsMap['REWARD'].methods.getCurrentTime(account).call();
              setRewardAmount(temp[0]);
              setClaimButtonStatus(temp1);
              } 
              const sugarReflection = await fetchReflection();
              if(sugarReflection != undefined) {
              const res = sugarReflection.curPrice;
              setRewardValue(res);
          } 
        } catch (error) {
            console.log(error);
          } 
        };
        ClaimInit();
      }, [yamClient]);

  const handleReward = () => {
    async function getRewards() {
        if(yamClient != undefined) {
          const res = await yamClient.contracts.contractsMap['REWARD'].methods.claimRewards().send({from:account})
        }
      }
      getRewards();
  }

  const handleEnterWallet =() => { 
    setAddressInputValue(account);
    async function getReflection() {
      const sugarReflection = await fetchReflection();
      if(sugarReflection != undefined){
        setReflectionAmount(sugarReflection.balToken);
        setReflectionValue(sugarReflection.curPrice * sugarReflection.balToken);
      }
      return sugarReflection;
    }
     getReflection();
  }
  
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
              placeholder={'Input Wallet Address'}
              value={addressInputValue}
              />
            </Grid>
            <Grid item sx={{mb:4}}>
              <Button className={classes.customButtonStyle} onClick={() => handleEnterWallet()}>Enter Wallet</Button>
            </Grid>
            <Grid item sx={{mb:3}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Reflections Amount</Typography>
              <Typography className={classes.subContentStyle}>{numberWithCommas( reflectionAmount.toFixed(0) )} SUGAR</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Reflections value </Typography>
              <Typography className={classes.subContentStyle}>{numberWithCommas( reflectionValue.toFixed(2) )} $</Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3,}}>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.titleStyle} variant="subtitle2" >CHECK YOUR DIAMOND NFT REWARDS</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Rewards Collected </Typography>
              <Typography className={classes.subContentStyle}>{numberWithCommas(rewardAmount)} SUGAR</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
              <Typography className={classes.subtitleStyle} variant="subtitle2" >Rewards Value</Typography>
              <Typography className={classes.subContentStyle}>{(rewardValue * rewardAmount).toFixed(2)} $</Typography>
            </Grid>
            <Grid item sx={{mb:3,}}>
            {claimButtonStatus == false ? (
              <Button className={classes.customButtonStyle} onClick={() => handleReward()} disabled>Claim Rewards {claimButtonStatus}</Button>
            ) : (
              <Button className={classes.customButtonStyle} onClick={() => handleReward()}>Claim Rewards {claimButtonStatus}</Button>
            )}
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
