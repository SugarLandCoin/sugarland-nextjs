import * as React from 'react';
import { useContext, useEffect, useState, useRef } from 'react';
import Radium, { StyleRoot } from 'radium';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Grid, Box, Typography } from '@mui/material';
import type { ChartArea, ChartData } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  registerables as registerablesJS
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { GlobalContext } from '../contexts';
import { stringHelper } from '../helpers';
import { useCoingecko } from '../hooks';

const COINGECKO = "/images/icons/Coingecko-icon.png";
const BCSSCAN = "/images/icons/BSCScan-icon.png";
const COINMARKETCAP = "/images/icons/Coinmarketcap-icon.png";
const POOCOIN = "/images/icons/Poocoin-icon.png";
const DEXTOOLS = "/images/icons/Dextools-icon.png";

const _registerables = registerablesJS;
_registerables?.map((value) => {
  ChartJS.register(value);
})

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, 
  Filler,
);

const Home: NextPage = () => {
  // const classes = useStyles();
  // const wallet = useWallet();
    const chartRef = useRef<ChartJS>(null);
  const { numberWithCommas } = stringHelper;
  const { fetchCoinChart } = useCoingecko();
  const { sugarPrice, tokenHolders, totalSupply, marketCap } = useContext(GlobalContext);
  const [ priceData, setPriceData] = useState<ChartData<'line'>>({
    datasets: []
  });

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "white",
          fontSize: 18,
        }
      },
      x: {
        ticks: {
          color: "white",
          fontSize: 18,
        }
      },
    },
    plugins: {
      legend: {
        color: 'white',
        position: 'top' as const,
      },
    },
  };

  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    const gradient = ctx.createLinearGradient(area.left, 0, area.right, 0);
    gradient.addColorStop(0, 'rgba(235, 145, 145, 0.6)');
    gradient.addColorStop(0.5, 'rgba(162, 105, 207, 0.6)');
    gradient.addColorStop(1, 'rgba(235, 145, 145, 0.6)');
    return gradient;
  }

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    const getChartData = async () => {
      const _chartData = await fetchCoinChart("sugarland-token");
      const _timestamps: string[] = [];
      const _prices: string[] = [];
      _chartData?.prices.map((e: any, i: number) => {
        if (i % 3 == 0) {
          let hh = "0" + new Date(e[0]).getHours().toString();
          hh = hh.slice(hh.length - 2, hh.length);
          _timestamps.push(hh + ":" + new Date(e[0]).getMinutes());
          _prices.push(e[1].toFixed(10));
        }
        return e;
      });
      setPriceData({
        labels: _timestamps,
        datasets: [
          {
            label: 'Sugar Price', 
            data: _timestamps.map((val, i)=> Number(_prices[i])),
            borderColor: 'white',
            backgroundColor: createGradient(chart.ctx, chart.chartArea),
            tension: 0.4,
            fill: 'start',
          },
        ],
      });
    };
    getChartData();
  }, [])

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
    display:'flex',
    alignItems:'center',
    marginBottom:'1%',
    marginTop:'1%',
  }; 
  const imgStyle = {
    width:'40px',
    height:'40px',
    paddingRight:'10px',
  };
  const customLinkStyle = {
    color:'white',
    textDecoration:'none',
    textAlign: 'center',
    cursor: 'pointer',
    marginLeft: '2%',
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
              <Typography sx={typoStyle} variant='subtitle2'> $ {numberWithCommas(marketCap)}</Typography>
            </Grid>
            <Grid item container>
              <Typography sx={typoStyle} variant='subtitle2'>Circulating Supply - </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> $ {numberWithCommas(totalSupply)}</Typography>
            </Grid>
            <Grid container>
              <Typography sx={typoStyle} variant='subtitle2'>Burned Supply - </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> {Number(sugarPrice).toFixed(6)}</Typography>
            </Grid>
            <Grid container>
              <Typography sx={typoStyle} variant='subtitle2'>Burned Value - </Typography>
              <Typography sx={typoStyle} variant='subtitle2'> {Number(sugarPrice).toFixed(6)}</Typography>
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
                <Image alt="coingecko" src={COINGECKO} width={'40px'} height={'40px'} />
                <Link href='https://www.coingecko.com/'>
                  <a target="_blank" style={customLinkStyle}>
                    <Typography variant='subtitle2'>CoinGecko</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="bsc" src={BCSSCAN} width={'40px'} height={'40px'} />
                <Link href='https://bscscan.com/'>
                  <a target="_blank" style={customLinkStyle}>
                    <Typography variant='subtitle2'>BSCScan</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="cmc" src={COINMARKETCAP} width={'40px'} height={'40px'} /> 
                <Link href='https://coinmarketcap.com/'>
                  <a target="_blank" style={customLinkStyle}>
                    <Typography variant='subtitle2'>CoinMarketCap</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="cmc" src={POOCOIN} width={'40px'} height={'40px'} />   
                <Link href='https://coinmarketcap.com/'>
                  <a target="_blank" style={customLinkStyle}>
                    <Typography variant='subtitle2'>Poocoin</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} md={4} style={networkIconStyle}>
                <Image alt="cmc" src={DEXTOOLS} width={'40px'} height={'40px'} /> 
                <Link href='https://www.dextools.io/'>
                  <a target="_blank" style={customLinkStyle}>
                    <Typography variant='subtitle2'>Dextools</Typography>
                  </a>
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

