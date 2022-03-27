import { Container, Backdrop, Alert } from '@mui/material';
import FusdContent from './FusdContent';
import ForwardContainer from '../../components/global/ForwardContainer';
import { useWallet } from 'use-wallet';

export default function FUSDContainer() {
  const wallet = useWallet();

  return (
    <Container maxWidth="xs">
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.appBar - 1 }}
        open={ !wallet?.account }
      >
        <Alert>
          Please Connect Wallet.
        </Alert>
      </Backdrop>
      <ForwardContainer child={<FusdContent type="Mint" />}/>
    </Container>
  )
}