import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button, TextField, Grid, Checkbox, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CardEtudiant from '../composants/CardEtudiant';
import Select from '@mui/material/Select';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AjoutSortant = () => {
  const [etudiant, setEtudiant] = useState([]);
  const [typeFormation, setTypeFormation] = useState('');
  const [parcours, setParcours] = useState('');
  const [anneEtude, setAnneEtude] = useState('');
  const [idEtudiant, setIdEtudiant] = useState([]);

  const selectionne = (student) => {
    const updateStudent = { ...student, admis: !student.admis };
    const indexToUpdate = etudiant.findIndex(
      (student) => student.id === updateStudent._id
    );

    const updatedToStudent = [...etudiant];
    updatedToStudent[indexToUpdate] = updateStudent;
    setEtudiant(updatedToStudent);
  };

  const recherche = async (e) => {
    e.preventDefault();
    try {
      const searchData = {
        typeFormation,
        parcours,
        anneEtude,
      };
      const search = await axios.get(
        `http://127.0.0.1:5000/api/etudiant/formation/${typeFormation}/parcours/${parcours}/anneEtude/${anneEtude}`,
        searchData
      );

      search.data.forEach((entree) => {
        entree.admis = false;
      });
      setEtudiant(search.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="main">
      {console.log(etudiant)}
      <form className="centre" onSubmit={recherche}>
        <FormControl
          variant="filled"
          sx={{ marginRight: '20px', minWidth: 200 }}
        >
          <InputLabel>Type de formation</InputLabel>
          <Select
            required
            label="Type de formation"
            onChange={(event) => {
              setTypeFormation(event.target.value);
            }}
          >
            <MenuItem value={'FC'}>FC</MenuItem>
            <MenuItem value={'FI'}>FI</MenuItem>
            <MenuItem value={'FOAD'}>FOAD</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          sx={{ marginRight: '20px', minWidth: 200 }}
        >
          <InputLabel>Parcours</InputLabel>
          <Select
            required
            label="Parcours"
            onChange={(event) => {
              setParcours(event.target.value);
            }}
          >
            <MenuItem value={'TIM'}>TIM</MenuItem>
            <MenuItem value={'BAT1'}>BAT1</MenuItem>
            <MenuItem value={'BAT2'}>BAT2</MenuItem>
            <MenuItem value={'TP1'}>TP1</MenuItem>
            <MenuItem value={'TP2'}>TP2</MenuItem>
            <MenuItem value={'CCI'}>CCI</MenuItem>
            <MenuItem value={'PCB'}>PCB</MenuItem>
            <MenuItem value={'GC1'}>GC1</MenuItem>
            <MenuItem value={'GC2'}>GC2</MenuItem>
            <MenuItem value={'UA'}>UA</MenuItem>
            <MenuItem value={'GIM1'}>GIM1</MenuItem>
            <MenuItem value={'GIM2'}>GIM2</MenuItem>
            <MenuItem value={'GIP1'}>GIP1</MenuItem>
            <MenuItem value={'GSI-MP1'}>GSI-MP1</MenuItem>
            <MenuItem value={'GSI-MP2'}>GSI-MP2</MenuItem>
            <MenuItem value={'GSR-ER1'}>GSR-ER1</MenuItem>
            <MenuItem value={'GSR-ER1'}>GSR-ER1</MenuItem>
            <MenuItem value={'GSA'}>GSA</MenuItem>
            <MenuItem value={'GER'}>GER</MenuItem>
            <MenuItem value={'MAC1'}>MAC1</MenuItem>
            <MenuItem value={'MAC2'}>MAC2</MenuItem>
            <MenuItem value={'FC1'}>FC1</MenuItem>
            <MenuItem value={'FC2'}>FC2</MenuItem>
            <MenuItem value={'MICE'}>MICE</MenuItem>
            <MenuItem value={'GTL1'}>GTL1</MenuItem>
            <MenuItem value={'GTL2'}>GTL2</MenuItem>
            <MenuItem value={'ELT'}>ELT</MenuItem>
            <MenuItem value={'GPME1'}>GPME1</MenuItem>
            <MenuItem value={'GPME2'}>GPME2</MenuItem>
            <MenuItem value={'MPCE'}>MPCE</MenuItem>
            <MenuItem value={'CAP1'}>CAP1</MenuItem>
            <MenuItem value={'CAP2'}>CAP2</MenuItem>
            <MenuItem value={'LOG1'}>LOG1</MenuItem>
            <MenuItem value={'LOG2'}>LOG2</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          type={'number'}
          label="Année universitaire"
          variant="outlined"
          onChange={(event) => {
            setAnneEtude(event.target.value);
          }}
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
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>Nom et Prénoms</TableCell>
                  <TableCell align="left">Parcours</TableCell>
                  <TableCell align="left">Type de formation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {etudiant &&
                  etudiant.map((val) => {
                    return (
                      <TableRow
                        key={val._id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <Button
                          onClick={() => {
                            selectionne(etudiant);
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {val.admis ? (
                              <Typography>Admis</Typography>
                            ) : (
                              <Typography>Non Admis</Typography>
                            )}
                          </TableCell>
                        </Button>

                        <TableCell align="left">
                          {val.nom} {val.prenom}
                        </TableCell>

                        <TableCell align="left">{val.parcours}</TableCell>

                        <TableCell align="left">{val.typeFormation}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer> */}
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              Status
            </Grid>
            <Grid item xs={3}>
              Nom et prénoms
            </Grid>
            <Grid item xs={3}>
              Parours
            </Grid>
            <Grid item xs={2}>
              Type de formation
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>{' '}
          <br />
          <CardEtudiant />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default AjoutSortant;
