
import React from 'react';
import { Typography, Box } from '@mui/material';

const ErrorMessage = ({ message }) => {
  return (
    <Box mt={2}>
      <Typography color="error" variant="body1">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
