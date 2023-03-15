import { Grid, Avatar } from '@mui/material';
import React from 'react';
import check from '../assets/image/check.png';

function CardEtudiant({ etudiant, onPress }) {
  return (
    <Grid
      container
      onClick={() => {
        onPress(etudiant);
      }}
      spacing={2}
      sx={{ cursor: 'pointer', marginTop: 1 }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        {etudiant.admis && (
          <Avatar
            alt="Logo IST-T"
            src={check}
            sx={{ width: 30, height: 30, marginTop: -1 }}
          />
        )}
      </Grid>
      <Grid item xs={3}>
        {etudiant.nom} {etudiant.prenom}
      </Grid>
      <Grid item xs={3}>
        {etudiant.parcours}
      </Grid>
      <Grid item xs={2}>
        {etudiant.typeFormation}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default CardEtudiant;
