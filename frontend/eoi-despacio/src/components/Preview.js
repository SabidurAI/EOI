import React from 'react';
import { Box, Typography } from '@mui/material';

const Preview = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // full viewport height
      }}
    >
      <Typography variant="h4" color="textSecondary">
        Work in progress
      </Typography>
    </Box>
  );
};

export default Preview;
