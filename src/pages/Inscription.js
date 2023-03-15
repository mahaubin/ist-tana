import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const Inscription = () => {
  const [globleSearch, setGlobalSearch] = useState(false);
  const [particularSearch, setParticularSearch] = useState(true);

  const handlingGlobal = () => {
    setGlobalSearch(true);
    setParticularSearch(false);
  };
  const handlingParticular = () => {
    setGlobalSearch(false);
    setParticularSearch(true);
  };

  const [fichier, setFichier] = useState();

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [sexe, setSexe] = useState('');
  const [typeFormation, setTypeFormation] = useState('');
  const [parcours, setParcours] = useState('');
  const [ecole, setEcole] = useState('');
  const [anneEtude, setAnneEtude] = useState();
  const [niveau, setNiveau] = useState();
  const redirect = useNavigate();

  const inscriptionExcel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fichier', fichier);
    formData.append('anneEtude', anneEtude);
    formData.append('niveau', niveau);
    await axios
      .post(`http://127.0.0.1:5000/api/etudiant/inscription`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inscription = async (e) => {
    e.preventDefault();
    const inscriptionData = {
      nom,
      prenom,
      parcours,
      typeFormation,
      telephone,
      email,
      sexe,
      ecole,
      anneEtude,
      niveau,
    };
    await axios
      .post(`http://127.0.0.1:5000/api/etudiant/`, inscriptionData)
      .then((res) => {
        console.log(res.data);
        redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="centre">
        <Button
          variant="contained"
          sx={{
            marginRight: '20px',
            width: '20%',
            marginBottom: 3,
            backgroundColor: '#0081B4',
            padding: 2,
            fontSize: 19,
          }}
          onClick={handlingParticular}
          style={{ textTransform: 'none' }}
        >
          Insertion multiple
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: '20px',
            width: '20%',
            marginBottom: 3,
            backgroundColor: '#0081B4',
            padding: 2,
            fontSize: 19,
          }}
          onClick={handlingGlobal}
          style={{ textTransform: 'none' }}
        >
          Insertion individuelle
        </Button>
      </div>

      {particularSearch && (
        <div>
          <form className="centre" onSubmit={inscriptionExcel}>
            <TextField
              id="outlined-basic"
              type={'number'}
              label="Année"
              variant="outlined"
              onChange={(event) => {
                setAnneEtude(event.target.value);
              }}
            />
            <FormControl
              variant="filled"
              sx={{ marginRight: '20px', marginLeft: '20px', minWidth: 200 }}
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

            <TextField
              id="outlined-basic"
              type={'file'}
              variant="outlined"
              onChange={(event) => {
                setFichier(event.target.files[0]);
              }}
            />
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
              Enregistrer
            </Button>
          </form>
          <br />
        </div>
      )}

      {globleSearch && (
        <div>
          <form className="centre" onSubmit={inscription}>
            <div style={{ marginTop: '20px' }}>
              <TextField
                id="outlined-basic"
                type={'text'}
                label="Nom"
                variant="outlined"
                onChange={(event) => {
                  setNom(event.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                type={'text'}
                label="Prénoms"
                variant="outlined"
                sx={{ marginLeft: '20px' }}
                onChange={(event) => {
                  setPrenom(event.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                type={'text'}
                label="Téléphone"
                variant="outlined"
                sx={{ marginLeft: '20px' }}
                onChange={(event) => {
                  setTelephone(event.target.value);
                }}
              />
              <FormControl
                variant="filled"
                sx={{ marginRight: '20px', marginLeft: '20px', minWidth: 200 }}
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
            </div>
            <div style={{ marginTop: '20px' }}>
              <TextField
                id="outlined-basic"
                type={'number'}
                label="Année universitaire"
                variant="outlined"
                onChange={(event) => {
                  setAnneEtude(event.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                type={'email'}
                label="Email"
                variant="outlined"
                sx={{ marginLeft: '20px' }}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <FormControl
                variant="filled"
                sx={{ marginLeft: '20px', minWidth: 240 }}
              >
                <InputLabel>Sexe</InputLabel>
                <Select
                  label="Sexe"
                  onChange={(event) => {
                    setSexe(event.target.value);
                  }}
                >
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'F'}>F</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ marginTop: '20px' }}>
              <FormControl
                variant="filled"
                sx={{ marginRight: '20px', minWidth: 230 }}
              >
                <InputLabel>Type de formation</InputLabel>
                <Select
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
                sx={{ marginRight: '20px', minWidth: 230 }}
              >
                <InputLabel>Parcours</InputLabel>
                <Select
                  label="Parcours"
                  onChange={(event) => {
                    setParcours(event.target.value);
                  }}
                >
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
              <FormControl
                variant="filled"
                sx={{ marginLeft: '20px', minWidth: 230 }}
              >
                <InputLabel>Ecole</InputLabel>
                <Select
                  label="Ecole"
                  onChange={(event) => {
                    setEcole(event.target.value);
                  }}
                >
                  <MenuItem value={'EGI'}>EGI</MenuItem>
                  <MenuItem value={'EGC'}>EGC</MenuItem>
                  <MenuItem value={'EGMEC'}>EGMEC</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Button
              variant="contained"
              style={{ textTransform: 'none' }}
              sx={{
                width: '15%',
                marginTop: 3,
                backgroundColor: '#0081B4',
                padding: 1,
                fontSize: 19,
              }}
              type="submit"
            >
              Enregistrer
            </Button>
          </form>
          <br />
        </div>
      )}
    </div>
  );
};

export default Inscription;
