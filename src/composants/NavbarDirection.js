import React, { useContext } from 'react';
import { AppBar, Toolbar, Link, Avatar } from '@mui/material';
import logo from '../assets/image/logo.png';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const NavbarDirection = () => {
  const { fetchUser } = useContext(AuthContext);
  const redirect = useNavigate();
  const handleClick = async () => {
    await axios.get('http://localhost:5000/api/user/logoutDirection');
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
            href="/addsortant"
            sx={{ color: 'white', margin: 2, fontWeight: 'bold', fontSize: 20 }}
            underline="none"
          >
            {' '}
            Ajout sortant
          </Link>
          <Link
            href="/listesortant"
            sx={{ color: 'white', margin: 2, fontWeight: 'bold', fontSize: 20 }}
            underline="none"
          >
            {' '}
            Liste sortant
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

export default NavbarDirection;
