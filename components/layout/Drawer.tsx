import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer  from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import { Divider, List, ListItem, ListItemText, Stack } from '@mui/material';

import Image from 'next/image';
import Logo from '../../public/ExWhite.svg';
import { drawerWidth } from '../../config';
import { GlobalContext, NavigationContext} from '../../contexts';

const TWITTER = "/images/icons/Twitter.png";
const TELEGRAM = "/images/icons/Telegram.png";
const INSTAGRAM = "/images/icons/Instagram.png";
const DISCORD = "/images/icons/Discord.png";
const FACEBOOK = "/images/icons/Facebook.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function PermanentDrawerLeft(props: Props) {
  const { window } = props;
  const router = useRouter();
  // const [addr, setAddr] = React.useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(true);
  const { sugarPrice } = useContext(GlobalContext);
  const { drawerOpen, toggleDrawerOpen } = useContext(NavigationContext);
  // const { connect, disconnect, account } = useContext(Web3ModalContext);
  const container = window !== undefined ? () => window().document.body : undefined;

  const boxTypoStyle = {
    background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
    borderRadius: 3,
    paddingRight: 7,
  };
  const boxItemStyle = {
    background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
    borderRadius: 3,
    pl:1,
    pr:1,
  }
  const listItemStyle = {
    paddingLeft: 3,
    justifyContent:'space-between',
    display:'flex',
  }
  const iconContainerStyle = {
    background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
    borderRadius: 3,
    paddingBottom: 4,
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const socialLinkStyle = {
    cursor: 'pointer',
  };

  const drawerContent = (
    <Stack direction="column" spacing={1} sx={{mt:4,}}>
      <Image alt="logo" src={Logo} width={'100px'} height={'30px'}/>
      <Box sx={boxTypoStyle}>
        <Typography variant="body1" align="center" p={2}>$SUGAR: $ {Number(sugarPrice).toFixed(6)}</Typography>
      </Box>
      <Box sx={boxItemStyle}>
        <List >
            <Link href='/' passHref>
              <ListItem button key="officialwebsite" selected={router.asPath == '/officialwebsite'}>
                <ListItemText sx={listItemStyle} primary="Official Website" />
              </ListItem>
            </Link>
        </List>
      </Box>
      <Box sx={boxItemStyle}>
          <List>
            <Link href='/' passHref>
              <ListItem button key="stats" selected={router.asPath == '/'}>
                <ListItemText sx={listItemStyle} primary="Stats" />
              </ListItem>
            </Link>
            <Link href='/swap' passHref>
              <ListItem button key="swap" selected={router.asPath == '/swap'}>
                <ListItemText sx={listItemStyle} primary="Swap" />
              </ListItem>
            </Link>
            <Link href='/Reward' passHref>
              <ListItem button key="Reward">
                <ListItemText sx={listItemStyle} primary="Rewards" />
              </ListItem>
            </Link>
          </List>
      </Box>
      <Box sx={boxItemStyle}>
          <List>
            <Link href="/soon" passHref>
                <ListItem button key="staking">
                  <ListItemText sx={listItemStyle} primary="Staking"/>
                </ListItem>
            </Link>
          </List>
      </Box>
      <Box sx={boxItemStyle}>
          <List>
            <Link href='/mint' passHref>
              <ListItem button key="mint" selected={router.asPath == '/mint'}>
                <ListItemText sx={listItemStyle} primary="Mint" />
              </ListItem>
            </Link>
            <Link href='/soon' passHref>
              <ListItem button key="whitelistpass" >
                <ListItemText sx={listItemStyle} primary="Whitelist Pass" />
              </ListItem>
            </Link>
            <Link href='/soon' passHref>
              <ListItem button key="citizen" >
                <ListItemText sx={listItemStyle} primary="Citizen NFTs" />
              </ListItem>
            </Link>
          </List>
      </Box>
      <Box sx={boxItemStyle}>
          <List>
            <Link href='/soon' passHref>
              <ListItem button key="governance">
                <ListItemText sx={listItemStyle} primary="Governance" />
              </ListItem>
            </Link>
            <Link href='/soon' passHref>
              <ListItem button key="listings">
                <ListItemText  sx={listItemStyle} primary="Listing" />
              </ListItem>
            </Link>
          </List>
      </Box>
      <Box sx={boxItemStyle}>
          <List>
            <Link href="/soon" passHref>
                <ListItem button key="merch" >
                  <ListItemText sx={listItemStyle} primary="Merch"/>
                </ListItem>
            </Link>
          </List>
      </Box>
      
 
      {/* <Box sx={{
          background: 'linear-gradient(to bottom, rgba(78, 94, 238, 0.25), rgba(228,122, 231, 0.25))',
          borderRadius: 3, 
          padding:2
        }}>
          <List>
            <Link href='/mint' passHref>
              <ListItem button key="mintnft" selected={router.asPath == '/mint'}>
                  <ListItemIcon>
                    <ImHammer color='white'/>
                  </ListItemIcon>
                  <ListItemText primary="Mint NFT" />
              </ListItem>
            </Link>
            <ListItem button key="stakenft" selected={router.asPath == '/stake'}>
              <ListItemIcon>
                <IoIosAnalytics color='white'/>
              </ListItemIcon>
              <ListItemText primary="Stake NFT" />
            </ListItem>
          </List>
      </Box> */}


      <Box sx={iconContainerStyle} >
          <List>
            <ListItem>
              <ListItemText sx={listItemStyle} primary="Socials" />
            </ListItem>
            <ListItem sx={listItemStyle}>
              <Link href='https://twitter.com/' passHref>
                <a target="_blank" style={socialLinkStyle}>
                  <Image alt="twitter" src={TWITTER} width={'30px'} height={'30px'}/>
                </a>
              </Link>
              <Link href='https://telegram.com/' passHref>
                <a target="_blank" style={socialLinkStyle}>
                  <Image alt="telegram" src={TELEGRAM} width={'30px'} height={'30px'}/>
                </a>
              </Link>
              <Link href='https://discord.com/' passHref>
                <a target="_blank" style={socialLinkStyle}>
                  <Image alt="discord" src={DISCORD} width={'30px'} height={'30px'}/>
                </a>
              </Link>
              <Link href='https://instagram.com/' passHref>
                <a target="_blank" style={socialLinkStyle}>
                  <Image alt="instagram" src={INSTAGRAM} width={'30px'} height={'30px'}/>
                </a>
              </Link>
              <Link href='https://www.facebook.com/' passHref>
                <a target="_blank" style={socialLinkStyle}>
                  <Image alt="facebook" src={FACEBOOK} width={'30px'} height={'30px'}/>
                </a>
              </Link>
            </ListItem>
          </List>
      </Box>
      <Divider />
    </Stack>

  );

  return (
    <>
      <Drawer
        open={drawerOpen}
        variant="temporary"
        container={container}
        ModalProps={{
          keepMounted: false, // Better open performance on mobile.
        }}
        onClose={toggleDrawerOpen}
        sx={{
          display: { xs: 'block', sm: 'block' },
          width: drawerWidth, 
          '& .MuiDrawer-paper': {
            color: 'white',
            padding: '30px 30px 30px 30px',
            background: '#261D4C',
            boxSizing: 'border-box', 
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
      
      <Drawer
        open
        variant="permanent"
        container={container}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          width: drawerWidth,
          '& .MuiDrawer-paper': { 
            width: drawerWidth,
            color: 'white',
            padding: '30px 30px 30px 30px',
            background: '#261D4C',
            boxSizing: 'border-box', 
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
