import * as React from 'react';
import { useContext, useEffect, useState, useRef } from 'react';
import type { NextPage } from 'next';
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
  return (
    <Container maxWidth="xl" sx={{mt: 20, p: 5}}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3}}>
            <Typography textAlign={'center'}>Current Price</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>$ {Number(sugarPrice).toFixed(6)}</Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3}}>
            <Typography textAlign={'center'}>Holders</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>{numberWithCommas(tokenHolders)}</Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3}}>
            <Typography textAlign={'center'}>Circulating Supply</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>{numberWithCommas(totalSupply)}</Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3}}>
            <Typography textAlign={'center'}>Marketcap</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>{numberWithCommas(marketCap.toFixed(0))}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{mt:10}} spacing={3}>
        <Grid item md={8}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3}}>
            <Chart type="line" ref={chartRef} options={chartOptions} data={priceData} />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3}}>
            <Typography textAlign={'center'} variant='subtitle2'>Sugarland News</Typography>
            <Typography textAlign={'center'}>Here you can find latest sugarland activities. Stay tuned to discover all the updateds related to the Sugarland curated metaverse.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
