import { Meteor } from 'meteor/meteor';

import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import SendMessage from './SendMessage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00335b'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export const App = () => {
  const [mupiId, setMupiId] = useState("");

  useEffect(() => {
    const url = new URLSearchParams(window.location.search)
    const mupiId = url.get('mupiId')
    if (mupiId) {
      setMupiId(mupiId)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box className='top-bar' />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="100px"
        width="100%"
      >
        {mupiId ? (
          <SendMessage mupiId={mupiId} />
        ) : (
          <Typography variant='h5' >
            Veuillez activer le NFC afin de scanner le Mupi
          </Typography>
        )}
      </Box>
      <Box>
        <img src="/img/JCDecaux_logo.svg" alt="logo" className="logo" />
      </Box>
    </ThemeProvider>
  );
};
