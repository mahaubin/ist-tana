import React, { useState, useEffect, useContext } from 'react';
import '../App.css';
import { Grid, Typography, Link } from '@mui/material';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListUser = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const getAllUser = async () => {
      await axios({
        method: 'get',
        url: `http://localhost:5000/api/user/`,
      })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllUser();
  }, []);
  return (
    <div className="main">
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',

              color: '#0081B4',
            }}
          >
            Liste des utilisateurs
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nom </TableCell>
                      <TableCell align="left">Prénoms</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="left">Service</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user &&
                      user.map((val) => {
                        return (
                          <TableRow
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                            key={val._id}
                          >
                            <TableCell scope="row">
                              <Link
                                href={`/updateuser/${val._id}`}
                                sx={{
                                  color: 'black',
                                  fontSize: 15,
                                }}
                                underline="none"
                              >
                                {val.nom}
                              </Link>
                            </TableCell>
                            <TableCell align="left">
                              <Link
                                href={`/updateuser/${val._id}`}
                                sx={{
                                  color: 'black',
                                  fontSize: 15,
                                }}
                                underline="none"
                              >
                                {val.prenom}
                              </Link>
                            </TableCell>
                            <TableCell align="left">
                              <Link
                                href={`/updateuser/${val._id}`}
                                sx={{
                                  color: 'black',
                                  fontSize: 15,
                                }}
                                underline="none"
                              >
                                {val.email}
                              </Link>
                            </TableCell>
                            <TableCell align="left">
                              <Link
                                href={`/updateuser/${val._id}`}
                                sx={{
                                  color: 'black',
                                  fontSize: 15,
                                }}
                                underline="none"
                              >
                                {val.isAdmin === true && 'Administrateur'}
                                {val.isDirection === true && 'Direction'}
                                {val.isScolarite === true && 'Scolarite'}
                              </Link>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default ListUser;
