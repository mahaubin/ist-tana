import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import {
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import axios from 'axios';

const DetailEtudiant = () => {
  const { id } = useParams();
  const [etudiant, setEtudiant] = useState();

  const [dossierEntrant, setDossierEntrant] = useState(true);
  const [dossierSortant, setDossierSortant] = useState(false);
  const [ajoutDossierEntrant, setAjoutDossierEntrant] = useState(false);
  const [ajoutDossierSortant, setAjoutDossierSortant] = useState(false);

  const [niveau1, setNiveau1] = useState(true);
  const [niveau2, setNiveau2] = useState(false);
  const [niveau3, setNiveau3] = useState(false);
  const [niveau4, setNiveau4] = useState(false);
  const [niveau5, setNiveau5] = useState(false);

  const afficherNiveau1 = () => {
    setNiveau1(true);
    setNiveau2(false);
    setNiveau3(false);
    setNiveau4(false);
    setNiveau5(false);
  };
  const afficherNiveau2 = () => {
    setNiveau1(false);
    setNiveau2(true);
    setNiveau3(false);
    setNiveau4(false);
    setNiveau5(false);
  };
  const afficherNiveau3 = () => {
    setNiveau1(false);
    setNiveau2(false);
    setNiveau3(true);
    setNiveau4(false);
    setNiveau5(false);
  };
  const afficherNiveau4 = () => {
    setNiveau1(false);
    setNiveau2(false);
    setNiveau3(false);
    setNiveau4(true);
    setNiveau5(false);
  };
  const afficherNiveau5 = () => {
    setNiveau1(false);
    setNiveau2(false);
    setNiveau3(false);
    setNiveau4(false);
    setNiveau5(true);
  };

  const afficherDossierEntrant = () => {
    setDossierEntrant(true);
    setDossierSortant(false);
    setAjoutDossierEntrant(false);
    setAjoutDossierSortant(false);
  };
  const afficherDossierSortant = () => {
    setDossierEntrant(false);
    setDossierSortant(true);
    setAjoutDossierEntrant(false);
    setAjoutDossierSortant(false);
  };
  const formajoutDossierEntrant = () => {
    setDossierEntrant(false);
    setDossierSortant(false);
    setAjoutDossierEntrant(true);
    setAjoutDossierSortant(false);
  };
  const formajoutDossierSortant = () => {
    setDossierEntrant(false);
    setDossierSortant(false);
    setAjoutDossierEntrant(false);
    setAjoutDossierSortant(true);
  };

  useEffect(() => {
    const getOneStudent = async () => {
      await axios({
        method: 'GET',
        url: `http://localhost:5000/api/etudiant/${id}`,
      })
        .then((res) => {
          console.log(res.data);
          setEtudiant(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getOneStudent();
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
            Détail sur l'étudiant
          </Typography>
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'right',
                  color: '#000',
                }}
              >
                Nom:
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                marginTop: '10px',
                textAlign: 'left',
              }}
            >
              <Typography variant="p">{etudiant && etudiant.nom}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'right',
                  color: '#000',
                }}
              >
                Prénoms:
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                marginTop: '10px',
                textAlign: 'left',
              }}
            >
              <Typography variant="p">{etudiant && etudiant.prenom}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'right',
                  color: '#000',
                }}
              >
                Type de formation:
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                marginTop: '10px',
                textAlign: 'left',
              }}
            >
              <Typography variant="p">
                {etudiant && etudiant.typeFormation}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'right',
                  color: '#000',
                }}
              >
                Parcours:
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                marginTop: '10px',
                textAlign: 'left',
              }}
            >
              <Typography variant="p">
                {etudiant && etudiant.parcours}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '10px',
            }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                style={{ textTransform: 'none' }}
                onClick={afficherNiveau1}
              >
                Niveau L1
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                style={{ textTransform: 'none' }}
                onClick={afficherNiveau2}
              >
                Niveau L2
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                style={{ textTransform: 'none' }}
                onClick={afficherNiveau3}
              >
                Niveau L3
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                style={{ textTransform: 'none' }}
                onClick={afficherNiveau4}
              >
                Niveau M1
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                style={{ textTransform: 'none' }}
                onClick={afficherNiveau5}
              >
                Niveau M2
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      {niveau1 && (
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#0081B4', textAlign: 'center' }}
          >
            Niveau 1
          </Typography>

          {/* pour les boutons dossier entrant et sortant */}
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '10px',
            }}
          >
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier sortant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier sortant
              </Button>
            </Grid>
          </Grid>
          {/* afficher la liste des dossier entrant */}
          {dossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Lettre de confirmation
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Lettre d'engagement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche individuelle</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Photo d'identite</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Convention validant l'inscription
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Recus de paiement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier entrant */}
          {ajoutDossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Lettre de confirmation
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Lettre d'engagement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche individuelle</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Photo d'identité</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Convention validant inscription
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Réçu de paiement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* afficher la liste des sossier sortant */}
          {dossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quitus</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche correction</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche attestation</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Demande de diplôme</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Diplôme</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quittance</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Procuration</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Rélevé de note</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          {' '}
                          Demande de Rélevé de note
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier sortant */}
          {ajoutDossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitus</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitance</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Procuration</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche correction</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche attestation</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Demande de diplôme</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Demande de rélevé de note
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                          marginBottom: 5,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}
        </div>
      )}
      {niveau2 && (
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#0081B4', textAlign: 'center' }}
          >
            Niveau 2
          </Typography>
          {/* pour les boutons dossier entrant et sortant */}
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '10px',
            }}
          >
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier sortant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier sortant
              </Button>
            </Grid>
          </Grid>
          {/* afficher la liste des dossier entrant */}
          {dossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Lettre de confirmation
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Lettre d'engagement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche individuelle</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Photo d'identite</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Convention validant l'inscription
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Recus de paiement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier entrant */}
          {ajoutDossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Lettre de confirmation
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Lettre d'engagement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche individuelle</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Photo d'identité</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Convention validant inscription
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Réçu de paiement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* afficher la liste des sossier sortant */}
          {dossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quitus</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche correction</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche attestation</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Demande de diplôme</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Diplôme</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quittance</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Procuration</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Rélevé de note</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          {' '}
                          Demande de Rélevé de note
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier sortant */}
          {ajoutDossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitus</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitance</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Procuration</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche correction</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche attestation</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Demande de diplôme</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Demande de rélevé de note
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                          marginBottom: 5,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}
        </div>
      )}
      {niveau3 && (
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#0081B4', textAlign: 'center' }}
          >
            Niveau 3
          </Typography>
          {/* pour les boutons dossier entrant et sortant */}
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '10px',
            }}
          >
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier sortant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier sortant
              </Button>
            </Grid>
          </Grid>
          {/* afficher la liste des dossier entrant */}
          {dossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Lettre de confirmation
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Lettre d'engagement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche individuelle</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Photo d'identite</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Convention validant l'inscription
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Recus de paiement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier entrant */}
          {ajoutDossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Lettre de confirmation
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Lettre d'engagement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche individuelle</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Photo d'identité</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Convention validant inscription
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Réçu de paiement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* afficher la liste des sossier sortant */}
          {dossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quitus</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche correction</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche attestation</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Demande de diplôme</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Diplôme</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quittance</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Procuration</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Rélevé de note</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          {' '}
                          Demande de Rélevé de note
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier sortant */}
          {ajoutDossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitus</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitance</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Procuration</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche correction</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche attestation</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Demande de diplôme</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Demande de rélevé de note
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                          marginBottom: 5,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}
        </div>
      )}
      {niveau4 && (
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#0081B4', textAlign: 'center' }}
          >
            Niveau 4
          </Typography>
          {/* pour les boutons dossier entrant et sortant */}
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '10px',
            }}
          >
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier sortant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier sortant
              </Button>
            </Grid>
          </Grid>
          {/* afficher la liste des dossier entrant */}
          {dossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Lettre de confirmation
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Lettre d'engagement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche individuelle</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Photo d'identite</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Convention validant l'inscription
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Recus de paiement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier entrant */}
          {ajoutDossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Lettre de confirmation
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Lettre d'engagement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche individuelle</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Photo d'identité</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Convention validant inscription
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Réçu de paiement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* afficher la liste des sossier sortant */}
          {dossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quitus</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche correction</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche attestation</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Demande de diplôme</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Diplôme</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quittance</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Procuration</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Rélevé de note</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          {' '}
                          Demande de Rélevé de note
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier sortant */}
          {ajoutDossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitus</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitance</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Procuration</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche correction</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche attestation</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Demande de diplôme</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Demande de rélevé de note
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                          marginBottom: 5,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}
        </div>
      )}
      {niveau5 && (
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#0081B4', textAlign: 'center' }}
          >
            Niveau 5
          </Typography>
          {/* pour les boutons dossier entrant et sortant */}
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '10px',
            }}
          >
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierEntrant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier entrant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={afficherDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Afficher dossier sortant
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={formajoutDossierSortant}
                variant="contained"
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  backgroundColor: '#0081B4',
                  fontSize: 15,
                }}
                style={{ textTransform: 'none' }}
              >
                Ajouter dossier sortant
              </Button>
            </Grid>
          </Grid>
          {/* afficher la liste des dossier entrant */}
          {dossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Lettre de confirmation
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Lettre d'engagement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche individuelle</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Photo d'identite</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          Convention validant l'inscription
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Recus de paiement</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier entrant */}
          {ajoutDossierEntrant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Lettre de confirmation
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Lettre d'engagement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche individuelle</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Photo d'identité</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Convention validant inscription
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Réçu de paiement</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* afficher la liste des sossier sortant */}
          {dossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quitus</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche correction</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Fiche attestation</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Demande de diplôme</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Diplôme</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Quittance</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Procuration</Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">Rélevé de note</Typography>
                      </TableCell>
                      <TableCell>Non livré</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="p">
                          {' '}
                          Demande de Rélevé de note
                        </Typography>
                      </TableCell>
                      <TableCell>Non réçu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}

          {/* ajout de dossier sortant */}
          {ajoutDossierSortant && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '10px',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <form>
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitus</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Quitance</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Procuration</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche correction</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Fiche attestation</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">Demande de diplôme</Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Demande de rélevé de note
                      </Typography>
                      <br />
                      <TextField
                        id="outlined-basic"
                        type={'file'}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      marginTop: '5px',
                    }}
                  >
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        sx={{
                          width: '80%',
                          marginTop: 5,
                          backgroundColor: '#0081B4',
                          padding: 1,
                          fontSize: 19,
                          marginBottom: 5,
                        }}
                      >
                        Enregistrer
                      </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailEtudiant;
