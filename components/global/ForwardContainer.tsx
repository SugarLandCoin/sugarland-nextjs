import * as React from 'react';
import { Box } from '@mui/material';
import { ReactElement } from 'react';

type ForwardContainerProps = {
  child: ReactElement< Record<any, unknown>, any>;
};

export default function ForwardContainer(props: ForwardContainerProps) {
  // const theme = useTheme();

  return (
    <Box 
      sx={{
        minWidth: '400px', 
        minHeight: '300px',
        boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)', 
        boxSizing: 'border-box',
        borderRadius: '25px', 
        border: '2px solid white',
        padding: '15px',
        marginTop: '100px',
        backgroundColor: 'rgba(255, 255, 255)',
      }}>
        {props.child}
    </Box>
  );
}