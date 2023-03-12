import React, { useContext } from 'react';
import { AppBar, Toolbar, Link, Avatar } from '@mui/material';
import logo from '../assets/image/logo.png';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavbarScolarite = () => {
  const { fetchUser } = useContext(AuthContext);
  const redirect = useNavigate();
  const handleClick = async () => {
    await axios.get('http://localhost:5000/api/user/logoutScolarite');
    await fetchUser();
    redirect('/');
    window.location.reload(true);
  };
  return (
    <div>
      <AppBar sx={{ backgroundColor: '#0081B4' }}>
        <Toolbar>
          <Avatar alt="Logo IST-T" src={logo} variant="square" href="/" />
          <Link
            href="/"
            sx={{ color: 'white', margin: 2, fontWeight: 'bold', fontSize: 20 }}
            underline="none"
          >
            {' '}
            Accueil
          </Link>
          <Link
            href="/inscription"
            sx={{ color: 'white', margin: 2, fontWeight: 'bold', fontSize: 20 }}
            underline="none"
          >
            {' '}
            Inscription
          </Link>
          <Link
            href="/reinscription"
            sx={{ color: 'white', margin: 2, fontWeight: 'bold', fontSize: 20 }}
            underline="none"
          >
            {' '}
            Réinscription
          </Link>
          <Link
            onClick={handleClick}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 'auto',
              cursor: 'pointer',
            }}
            underline="none"
          >
            {' '}
            Deconnexion
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarScolarite;
