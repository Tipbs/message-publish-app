import React from 'react';
import { useForm, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Props {
  mupiId: string;
}

export const SendMessage = (props: Props) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      width="100%"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <TextField
                {...field}
                label="Veuillez saisir votre message"
                variant="outlined"
                size='small'
                rows={4}
                multiline
              />
            )}
          />
        </Grid>
        <Grid
          item
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "25ch" }}
          >
            Envoyer
          </Button>
        </Grid>
      </Grid>
      <Typography variant='body1' className='mupi-number' >
        Mupi n° {props.mupiId}
      </Typography>
    </Box>
  );
};

export default SendMessage;