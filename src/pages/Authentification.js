import React, { useContext, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import '../App.css';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Authentification = () => {
  const redirect = useNavigate();
  const { fetchUser } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const connexion = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios.post(`http://localhost:5000/api/user/login`, loginData);
      await fetchUser();
      redirect('/home');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="main">
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} sx={{}}>
          <Typography
            variant="h4"
            sx={{
              color: '#0081B4',
              textAlignLast: 'center',
            }}
          >
            Authentification
          </Typography>
          <form className="centre" onSubmit={connexion}>
            <TextField
              id="outlined-basic"
              type={'email'}
              variant="outlined"
              sx={{ width: '80%', marginBottom: 3 }}
              placeholder="Entrez votre identifiant"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              type={'password'}
              variant="outlined"
              sx={{ width: '80%', marginBottom: 3 }}
              placeholder="Entrez votre mot de passe"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Button
              type="submit"
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
              Connexion
            </Button>
          </form>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Authentification;
