import React, { useState } from 'react';
import { TextField, Grid, Box } from '@mui/material';

function CartaPresentacion() {
  const [contratante, setContratante] = useState('');
  const [nombreDelProceso, setNombreDelProceso] = useState('');

  const handleContratanteChange = (event) => {
    setContratante(event.target.value);
  };

  const handleNombreDelProcesoChange = (event) => {
    setNombreDelProceso(event.target.value);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Contratante"
            value={contratante}
            onChange={handleContratanteChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nombre del Proceso"
            value={nombreDelProceso}
            onChange={handleNombreDelProcesoChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartaPresentacion;
