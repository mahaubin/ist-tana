import { Grid } from '@mui/material';
import React from 'react';

function CardEtudiant() {
  return (
    <Grid container spacing={2} sx={{ cursor: 'pointer' }}>
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
    </Grid>
  );
}

export default CardEtudiant;
