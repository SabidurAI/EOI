import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const EntendimientoProyecto = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(text);
    setText('');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Entendimiento del Proyecto
      </Typography>
      <TextField
        label="Describa su entendimiento del proyecto"
        multiline
        fullWidth
        rows={4}
        variant="outlined"
        value={text}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Guardar
      </Button>
    </Box>
  );
};

export default EntendimientoProyecto;
