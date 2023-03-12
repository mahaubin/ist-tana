import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography, TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../App.css';

const UpdateUser = () => {
  const { id } = useParams();
  return (
    <div className="main">
      {' '}
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} sx={{}}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',

              color: '#0081B4',
            }}
          >
            Mettre à jour l'utilisateur
          </Typography>
          <form className="centre">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type={'text'}
                  variant="outlined"
                  sx={{ width: '80%', marginBottom: 3 }}
                  placeholder="Entrez le nom"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type={'text'}
                  variant="outlined"
                  sx={{ width: '80%', marginBottom: 3 }}
                  placeholder="Entrez le prénom"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type={'email'}
                  variant="outlined"
                  sx={{ width: '80%', marginBottom: 3 }}
                  placeholder="Entrez l'adresse mail"
                />
              </Grid>
              <Grid item xs={6}>
                {' '}
                <FormControl
                  variant="filled"
                  sx={{
                    marginRight: '20px',
                    marginLeft: '20px',
                    minWidth: 200,
                    width: '80%',
                  }}
                >
                  <InputLabel>Type d'utilisateur</InputLabel>
                  <Select label="Type utilisateur">
                    <MenuItem value={'direction'}>Direction</MenuItem>
                    <MenuItem value={'scolarite'}>Scolarite</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type={'password'}
                  variant="outlined"
                  sx={{ width: '80%', marginBottom: 3 }}
                  placeholder="Entrez nouveau mot de passe"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type={'password'}
                  variant="outlined"
                  sx={{ width: '80%', marginBottom: 3 }}
                  placeholder="Confirmer nouveau mot de passe"
                />
              </Grid>
            </Grid>

            <Button
              style={{ textTransform: 'none' }}
              variant="contained"
              sx={{
                width: '30%',
                marginBottom: 3,
                backgroundColor: '#0081B4',
                padding: 2,
                fontSize: 19,
              }}
            >
              Mettre à jour
            </Button>
          </form>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default UpdateUser;
