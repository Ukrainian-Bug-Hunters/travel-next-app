import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function GuestsPicker() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Guests" variant="outlined" />
    </Box>
  );
}