import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import { drawerWidth } from '../../config';
import { Web3ModalContext } from '../../contexts';

import { styled } from '@mui/material/styles';
import { useCallback, useContext } from 'react';

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
const StyledToolbar = styled(Toolbar)(( ) => ({
  alignItems: 'flex-center',
  // paddingTop: theme.spacing(1),
  // paddingBottom: theme.spacing(2),
  '@media all': {
  },
}));

const NavBar: NextPage = () => {
  const router = useRouter();
  const [addr, setAddr] = React.useState<string>("");
  const { connect, disconnect, account } = useContext(Web3ModalContext);

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
    <AppBar position="fixed" color="transparent" elevation={0} sx={{alignItems: 'flex-end', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      <StyledToolbar >
        { router.asPath != '/swap' && _renderConnectWalletButton() }
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
