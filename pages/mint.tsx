import React, { useCallback } from "react";
import { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import { useYam } from '../hooks';
import { Container, Grid, Stack, Typography, Button, Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { GlobalContext, Web3ModalContext } from '../contexts';

const useStyles = makeStyles(() => ({
  diamondBox: {
    margin:'5%',
    paddingBottom:'5%',
    backgroundSize:"contain",
    backgroundRepeat:'no-repeat',
    backgroundPositionX:'center',
    backgroundPositionY:'-10px',
    borderRadius:'10px',
    color:'White',
  },

  customBadge: {
    display:'flex',
    fontSize:'15px',
    color:'#EB6FE9',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#513B7C',
    color: theme.palette.common.white,
    fontSize: 12,
    fontWeight: 800,
    paddingTop: '6px',
    paddingBottom: '6px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontWeight: 800,
    color: theme.palette.common.white,
    paddingTop: '6px',
    paddingBottom: '6px',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: 'transparent',
    // backgroundColor: '#70569D',
    borderRadius: 10,
  },
  '&:nth-of-type(odd)': {
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Mint: NextPage = () => {
  const classes = useStyles(); 
  const globalContext = useContext(GlobalContext);
  const { account } = useContext(Web3ModalContext);
  const sugarPrice = globalContext.sugarPrice == null ? 0 : globalContext.sugarPrice;
  const [sellingStatus, setSellingStatus] = useState(true); 
  const [exchangeStatus, setExchangeStatus] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  // const [winnerInfo, setWinnerInfo] = useState<any>();
  const [nftPrice, setNftPrice] = useState<number[]>([]);
  const [remainingAmount, setRemainingAmount] = useState<number[]>([]);
  const [exchangeable, setExchangeable] = useState<number[]>([]);
  const yamClient = useYam();

  const createData = (
    tier: string,
    whale: string,
    balance: string,
    quantity: string,
    cost: string,
    day: string,
    month: string,
    worth: string,
  ) => {
    return { tier, whale, balance, quantity, cost, day, month, worth };
  };

  const rows = [
    createData('Tier 1', 'White Diamond', '5,000,000', '45', '5', '1,800', '54,000', '$' + 113),
    createData('Tier 2', 'Black Diamond', '3,000,000', '45', '4', '1,060', '31,800', '$' + 67),
    createData('Tier 3', 'Purple Diamond', '2,000,000', '75', '3', '695', '20,850', '$' + 44),
    createData('Tier 4', 'Rose GOLD Diamond', '1,000,000', '100', '2', '345', '10,350', '$' + 22),
    createData('Tier 5', 'Pink Diamond', '500,000', '100', '1', '170', '5,100', '$' + 11),
    createData('Tier 6', 'Gray Diamond', '300,000', '135', '0.5', '100', '3,000', '$' + 6),
  ];

  useEffect(() => {
    const getSellingStatus = async () => {
      try {
        if(yamClient != undefined) {
          const exchangeRes = await yamClient.contracts.contractsMap['SugarOldNFT'].methods.getTotalBalance(account).call();
          const totalBalanceRes = await yamClient.contracts.contractsMap['CitizenNFT'].methods.balanceOf(account).call();
          const sellingStatusRes = await yamClient.contracts.contractsMap['CitizenNFT'].methods.getSellingStatus().call(); //Selling
          // const winnerInfoRes = await yamClient.contracts.contractsMap['CitizenNFT'].methods.getWinnerInfo(account).call(); 
          const remains: number[] = new Array(10);
          const prices: number[] = new Array(10);
          const exchanges: number[] = new Array(10);
          for(let i = 1; i <= 10; i++){
            const tempRemain = await yamClient.contracts.contractsMap['CitizenNFT'].methods.getRemainingAmount(i).call();
            const tempPrice = await yamClient.contracts.contractsMap['CitizenNFT'].methods.getPricePerNFT(i).call();
            const tempExchange = await yamClient.contracts.contractsMap['SugarOldNFT'].methods.balanceOf(account,i).call();
            remains[i] = tempRemain;
            prices[i] = tempPrice;
            exchanges[i] = tempExchange;
          }
          setTotalBalance(totalBalanceRes);
          setRemainingAmount(remains);
          setNftPrice(prices);
          setExchangeable(exchanges);
          setSellingStatus(sellingStatusRes);
          // setWinnerInfo(winnerInfoRes);
        
          if(exchangeRes > 0) {
            if(totalBalanceRes >= exchangeRes) {
              setExchangeStatus(2);
            } else {
              setExchangeStatus(1);
            }
          } else {
            setExchangeStatus(2);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSellingStatus();
  }, [yamClient]);


  const handleMint = async (id: number) => {
    if(yamClient != undefined) {
      if(nftPrice[id]) {
        await yamClient.contracts.contractsMap['CitizenNFT'].methods.mint(account, id).send({from:account, value:nftPrice[id]});
      }
    }
  };

  // const handleClaim = async () => {
  //   if(yamClient != undefined) {
  //     await yamClient.contracts.contractsMap['CitizenNFT'].methods.airdrop().send({from: account});
  //   }
  // };

  const handleExchange = async (id: number) => {
    if(yamClient != undefined) {
      await yamClient.contracts.contractsMap['CitizenNFT'].methods.exchange(account , id).send({from:account});
    }
  };

  const getMintEnableStatus = useCallback((id: number): boolean => {
    // Mint phase
    if (sellingStatus) {
      return true;
    } else {
      return false;
    }
    // Airdrop phase

    // if (winnerInfo[1]) {
    //   return false;
    // }
    // return (id == winnerInfo[0]);
  // }, [sellingStatus, winnerInfo]);
  }, [sellingStatus]);

  
  const getExchangeEnableStatus = useCallback((id: number): boolean => {
    if (sellingStatus) {
      if(exchangeable[id] == 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  },[sellingStatus,exchangeable]);
  
  const _renderTable = (_rows: any) => {
    return (
      <TableContainer component={Paper} sx={{backgroundColor: 'transparent', color: 'white'}} elevation={0}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{borderRadius: 30}}>
              <StyledTableCell>TIERS</StyledTableCell>
              <StyledTableCell align="right">WHALE CARD TYPE</StyledTableCell>
              <StyledTableCell align="right">MINIMUM BALANCE</StyledTableCell>
              <StyledTableCell align="right">TOTAL QUANTITY</StyledTableCell>
              <StyledTableCell align="right">MINT COST IN BNB</StyledTableCell>
              <StyledTableCell align="right">REWARDS /NFT/DAY</StyledTableCell>
              <StyledTableCell align="right">REWARDS /NFT/MONTH</StyledTableCell>
              <StyledTableCell align="right">REWARDS WORTH</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_rows.map((row: any) => (
              <StyledTableRow 
                key={row.tier}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.tier}
                </StyledTableCell>
                <StyledTableCell align="right">{row.whale}</StyledTableCell>
                <StyledTableCell align="right">{row.balance}</StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.cost}</StyledTableCell>
                <StyledTableCell align="right">{row.day}</StyledTableCell>
                <StyledTableCell align="right">{row.month}</StyledTableCell>
                <StyledTableCell align="right">{row.worth}</StyledTableCell>
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <Container maxWidth="xl" sx={{mt: 3, p: 10}}>
      {/* This is Minting Page for NFT */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} p={2} mb={3}>
          <Typography variant='h4'>COLLECT DIAMOND NFTS & BOOST YOUR $SUGAR REWARDS</Typography>
          <Typography variant='h6'>Monthly Rewards Pool = 7,374,750 SUGAR [Worth ${(sugarPrice * 7374750).toFixed(2)}*]</Typography>
        </Grid>
        {
          (new Array(10).fill(0)).map((_, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={2} >
                <Stack direction="column" justifyContent='center' alignItems='center'>
                    <Box 
                      component="img"
                      // src={`/nft/cn${index + 1}.jpg`}
                      src={`/nft/tier${(index % 6) + 1}.png`}
                      sx={{
                        height: 300,
                        width: 180,
                        borderRadius: 3,
                      }} 
                    ></Box>
                    
                    { exchangeStatus == 2 ? (
                     ( nftPrice[index+1] || remainingAmount[index+1] ) ? (
                        <Button sx={{width: 180, p:3, mb:2,}}
                        onClick = {() => handleMint(index + 1)}
                        disabled = {!getMintEnableStatus(index + 1)}
                        >Mint Now
                        </Button>
                      ) : (
                        <Button sx={{width: 180, p:3, mb:2,}}>
                        <CircularProgress disableShrink />
                        </Button>
                      )
                    ) :(
                      exchangeStatus == 1 ? (
                        <Button sx={{width: 180, p:3, mb:2,}}
                          onClick = {() => handleExchange(index + 1)}
                          // disabled = {!getExchangeEnableStatus(index + 1)}
                        >Exchange NFT
                        </Button> ) : (
                          <Button sx={{width: 180, p:3, mb:2,}}>
                          <CircularProgress disableShrink />
                          </Button>
                        )
                    )}

                  <Typography className={classes.customBadge}>Only {remainingAmount[index+1]} left!</Typography>
                </Stack>
              </Grid>
            )
          })
        }
        <Grid item xs={12} md={12} mt={5} >
          <Box >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={9}>
                <Box>
                  { _renderTable(rows) }
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Stack direction="column">
                  <Typography variant="subtitle1">REWARDS CONDITION</Typography>
                  <Typography variant="label1">Daily rewards will reflect only if you have minimum SUGAR balance for your NFT tier.</Typography>
                  <Typography variant="subtitle1">MULTIPLE NFTS</Typography>
                  <Typography variant="label1">For Multiple NFTs, Wallet must have Combined minimum balance for all NFTs owned.</Typography>
                  <Typography variant="label1">Each NFT Trade has built in 10% Royalties back to Sugarland&apos;s Royalty Wallet.</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mint;
