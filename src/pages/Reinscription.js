import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, TextField, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import CardEtudiant from '../composants/CardEtudiant';
import { useNavigate } from 'react-router-dom';

const Reinscription = () => {
  const redirect = useNavigate();
  const [etudiant, setEtudiant] = useState([]);
  const [typeFormation, setTypeFormation] = useState('');
  const [parcours, setParcours] = useState('');
  const [anneEtude, setAnneEtude] = useState('');
  const [niveau, setNiveau] = useState();

  const updateEtudiant = (student) => {
    const updateStudent = {
      ...student,
      admis: !student.admis,
    };
    const indexToUpdate = etudiant.findIndex(
      (student) => student._id === updateStudent._id
    );

    const updatedStudentList = [...etudiant];
    updatedStudentList[indexToUpdate] = updateStudent;
    setEtudiant(updatedStudentList);
  };

  function renderListeEtudiant() {
    return etudiant.map((student) => (
      <CardEtudiant
        onPress={updateEtudiant}
        etudiant={student}
        key={student._id}
      />
    ));
  }

  const addSortant = async (e) => {
    e.preventDefault();
    try {
      const reinscriptionData = {
        etudiant,
        niveau,
        anneEtude,
      };
      await axios.patch(
        `http://127.0.0.1:5000/api/etudiant/reinscription`,
        reinscriptionData
      );
      redirect('/home');
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
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
          {renderListeEtudiant()}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <form className="centre" onSubmit={addSortant}>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={4}>
                <FormControl
                  variant="filled"
                  sx={{
                    marginRight: '20px',
                    marginLeft: '20px',
                    minWidth: 200,
                  }}
                >
                  <InputLabel>Niveau</InputLabel>
                  <Select
                    label="Age"
                    onChange={(event) => {
                      setNiveau(event.target.value);
                    }}
                  >
                    <MenuItem value={'L1'}>L1</MenuItem>
                    <MenuItem value={'L2'}>L2</MenuItem>
                    <MenuItem value={'L3'}>L3</MenuItem>
                    <MenuItem value={'M1'}>M1</MenuItem>
                    <MenuItem value={'M2'}>M2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  type={'number'}
                  label="Année universitaire"
                  variant="outlined"
                  onChange={(event) => {
                    setAnneEtude(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  style={{ textTransform: 'none' }}
                  sx={{
                    width: 200,
                    height: 50,
                    backgroundColor: '#0081B4',
                    padding: 1,
                    fontSize: 19,
                  }}
                  type="submit"
                >
                  Enregistrer
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </form>{' '}
    </div>
  );
};

export default Reinscription;
