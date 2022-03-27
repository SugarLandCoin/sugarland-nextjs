import * as React from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { IoIosStats, IoIosSwap, IoIosAnalytics } from 'react-icons/io';
import { IoStorefront, IoTicket } from 'react-icons/io5';
import { ImCoinDollar, ImHammer } from 'react-icons/im';
import Image from 'next/image';
import Logo from '../../public/ExWhite.svg';
import { drawerWidth } from '../../config';
import { GlobalContext } from '../../contexts';

export default function PermanentDrawerLeft() {
  const { sugarPrice } = useContext(GlobalContext);
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          color: 'white',
          boxSizing: 'border-box',
          padding: '30px 30px 30px 30px',
          background: '#261D4C',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack direction="column" spacing={3}>
        <Image alt="logo" src={Logo} width={'100px'} height={'30px'} />
        <Box sx={{
          background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
          borderRadius: 3
        }}>
          <Typography variant="body1" align="center" p={2}>$SUGAR: $ {sugarPrice}</Typography>
          <Box sx={{
            background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
            borderRadius: 3, 
            padding:2
          }}>
            <List>
              <ListItem button key="stats">
                <ListItemIcon>
                  <IoIosStats color='white'/>
                </ListItemIcon>
                <ListItemText primary="Stats" />
              </ListItem>
              <ListItem button key="swap">
                <ListItemIcon>
                  <IoIosSwap color='white'/>
                </ListItemIcon>
                <ListItemText primary="Swap" />
              </ListItem>
              <ListItem button key="reflections">
                <ListItemIcon>
                  <ImCoinDollar color='white' />
                </ListItemIcon>
                <ListItemText primary="Reflections" />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box sx={{
            background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
            borderRadius: 3, 
            padding:2
          }}>
            <List>
              <Link href='/mint' passHref>
                <ListItem button key="mintnft">
                    <ListItemIcon>
                      <ImHammer color='white'/>
                    </ListItemIcon>
                    <ListItemText primary="Mint NFT" />
                </ListItem>
              </Link>
              <ListItem button key="stakenft">
                <ListItemIcon>
                  <IoIosAnalytics color='white'/>
                </ListItemIcon>
                <ListItemText primary="Stake NFT" />
              </ListItem>
            </List>
        </Box>
        <Box sx={{
            background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
            borderRadius: 3, 
            padding:2
          }}>
            <List>
              <ListItem button key="governance">
                <ListItemIcon>
                  <IoTicket  color='white'/>
                </ListItemIcon>
                <ListItemText primary="Governance" />
              </ListItem>
              <ListItem button key="merch">
                <ListItemIcon>
                  <IoStorefront color='white'/>
                </ListItemIcon>
                <ListItemText primary="Merch" />
              </ListItem>
            </List>
        </Box>
        <Divider />
      </Stack>
    </Drawer>
  );
}
