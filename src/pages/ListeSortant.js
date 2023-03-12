import React, { useState } from 'react';
import '../App.css';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListeSortant = () => {
  return (
    <div className="main">
      <form className="centre">
        <FormControl
          variant="filled"
          sx={{ marginRight: '20px', minWidth: 200 }}
        >
          <InputLabel>Type de formation</InputLabel>
          <Select label="Age">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          sx={{ marginRight: '20px', minWidth: 200 }}
        >
          <InputLabel>Parcours</InputLabel>
          <Select label="Age">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          type={'number'}
          label="Année universitaire"
          variant="outlined"
        />{' '}
        <br />
        <Button
          type="submit"
          variant="contained"
          style={{ textTransform: 'none' }}
          sx={{
            width: '15%',
            marginTop: 3,
            backgroundColor: '#0081B4',
            padding: 1,
            fontSize: 19,
          }}
        >
          Recherche
        </Button>
      </form>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nom et Prénoms</TableCell>
              <TableCell align="left">Parcours</TableCell>
              <TableCell align="left">Type de formation</TableCell>
              <TableCell align="left">Année Universitaire</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Nom
              </TableCell>
              <TableCell align="left">calorie</TableCell>
              <TableCell align="left">fat</TableCell>
              <TableCell align="left">Carbs</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListeSortant;
