import React, { useEffect, useState, useContext } from "react";
import type { NextPage } from 'next';
import { styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography, Button, Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { GlobalContext } from '../contexts';

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
    fontSize: 10,
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
  const { sugarPrice } = useContext(GlobalContext);

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
    createData('TIER 1', 'WHITE DIAMOND', '5,000,000', '30', '5', '1,800', '54,000', '$' + (sugarPrice * 54000).toFixed(2)),
    createData('TIER 2', 'BLACK DIAMOND', '3,000,000', '30', '4', '1,000', '30,000', '$' + (sugarPrice * 30000).toFixed(2)),
    createData('TIER 3', 'PURPLE DIAMOND', '2,000,000', '50', '3', '700', '21,000', '$' + (sugarPrice * 21000).toFixed(2)),
    createData('TIER 4', 'ROSE GOLD DIAMOND', '1,000,000', '80', '2', '350', '10,500', '$' + (sugarPrice * 10500).toFixed(2)),
    createData('TIER 5', 'PINK DIAMOND', '500,000', '100', '1', '180', '5,400', '$' + (sugarPrice * 5400).toFixed(2)),
    createData('TIER 6', 'GREY DIAMOND', '300,000', '110', '0.5', '100', '3,000', '$' + (sugarPrice * 3000).toFixed(2)),
  ];

  useEffect(() => {
	}, []);


  const _renderTable = (_rows: any) => {
    return (
      <TableContainer component={Paper} sx={{backgroundColor: 'transparent', color: 'white'}} elevation={0}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
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
    <Container maxWidth='lg' sx={{pt: 10}}>
      {/* This is Minting Page for NFT */}
      <Grid container>
        <Grid item sm={12} md={12} p={2} mb={3}>
          <Typography variant='h4'>COLLECT DIAMOND NFTS & BOOST YOUR $SUGAR REWARDS</Typography>
          <Typography variant='h6'>Monthly Rewards Pool = 5,280,000 SUGAR [Worth ${(sugarPrice * 5280000).toFixed(2)}*]</Typography>
        </Grid>
        <Grid item sm={4} md={2}>
          <Stack direction="column" justifyContent='center' alignItems='center'>
            <Box component="img"
              src="/nft/tier (1).png"
              sx={{
                height: 240,
                width: 150,
                borderRadius: 3,
              }} 
            />
            <Button sx={{width: 150}}>MINT NOW</Button>
          </Stack>
        </Grid>
        <Grid item sm={4} md={2}>
          <Stack direction="column" justifyContent='center' alignItems='center'>
            <Box component="img"
              src="/nft/tier (2).png"
              sx={{
                height: 240,
                width: 150,
                borderRadius: 3,
              }} 
            />
            <Button sx={{width: 150}}>MINT NOW</Button>
          </Stack>
        </Grid>
        <Grid item sm={4} md={2}>
          <Stack direction="column" justifyContent='center' alignItems='center'>
            <Box component="img"
              src="/nft/tier (3).png"
              sx={{
                height: 240,
                width: 150,
                borderRadius: 3,
              }} 
            />
            <Button sx={{width: 150}}>MINT NOW</Button>
          </Stack>
        </Grid>
        <Grid item sm={4} md={2}>
          <Stack direction="column" justifyContent='center' alignItems='center'>
            <Box component="img"
              src="/nft/tier (4).png"
              sx={{
                height: 240,
                width: 150,
                borderRadius: 3,
              }} 
            />
            <Button sx={{width: 150}}>MINT NOW</Button>
          </Stack>
        </Grid>
        <Grid item sm={4} md={2}>
          <Stack direction="column" justifyContent='center' alignItems='center'>
            <Box component="img"
              src="/nft/tier (5).png"
              sx={{
                height: 240,
                width: 150,
                borderRadius: 3,
              }} 
            />
            <Button sx={{width: 150}}>MINT NOW</Button>
          </Stack>
        </Grid>
        <Grid item sm={4} md={2}>
          <Stack direction="column" justifyContent='center' alignItems='center'>
            <Box component="img"
              src="/nft/tier (6).png"
              sx={{
                height: 240,
                width: 150,
                borderRadius: 3,
              }} 
            />
            <Button sx={{width: 150}}>MINT NOW</Button>
          </Stack>
        </Grid>
        <Grid item md={12} mt={5}>
          <Box >
            <Grid container spacing={2}>
              <Grid item sm={12} md={9}>
                <Box>
                  { _renderTable(rows) }
                </Box>
              </Grid>
              <Grid item sm={12} md={3}>
                <Stack direction="column">
                  <Typography variant="subtitle1">MINT CONDITION</Typography>
                  <Typography variant="label1">Whitelisted Winners can mint for free but should have minimum SUGAR BALANCE for their Tier.</Typography>
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
      {/* <FUSDContainer /> */}
    </Container>
  );
};

export default Mint;
