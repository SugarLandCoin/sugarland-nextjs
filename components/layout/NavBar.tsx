import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Button, Stack, IconButton } from '@mui/material';
import { drawerWidth } from '../../config';
import { Web3ModalContext, NavigationContext } from '../../contexts';
import MenuIcon from '@mui/icons-material/Menu';

import { styled } from '@mui/material/styles';
import { useCallback, useContext } from 'react';

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
const StyledToolbar = styled(Toolbar)(( ) => ({
  alignItems: 'flex-center',
  justifyContent: 'space-between',
  width: '100%',
}));

const NavBar: NextPage = () => {
  const router = useRouter();
  const [addr, setAddr] = React.useState<string>("");
  const { connect, disconnect, account } = useContext(Web3ModalContext);
  const { toggleDrawerOpen } = useContext(NavigationContext);

  React.useEffect(() => {
    if (account) {
      const updatedAddr = account.toString();
      setAddr(updatedAddr);
    }
  })
  
  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const _renderConnectWalletButton = () => {

    return (
      <Stack direction="row" spacing={2}>
        {!account ? (
          <Button
            color="primary"
            onClick={handleConnectWallet}
          >
            Connect
          </Button>
        ) : (
          <Button 
            color="secondary"
            onClick={handleDisconnectWallet}
          >
            {addr.substr(0,5) + "..." + addr.substr(addr.length - 6, addr.length)}
          </Button>
        )}
      </Stack>
    );
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0} 
      sx={{
        alignItems: 'flex-end', 
        justifyContent: 'space-between',
        sm: {
          width: '100%',
          pl: 3,
        },
        md: {
          width: `calc(100% - ${drawerWidth}px)`, 
          ml: `${drawerWidth}px` 
        },
      }}>
      <StyledToolbar >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawerOpen}
          sx={{ mr: 2, visibility: { md: 'hidden' } }}
        >
          <MenuIcon />
        </IconButton>
        
        { router.asPath != '/swap' && _renderConnectWalletButton() }
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
