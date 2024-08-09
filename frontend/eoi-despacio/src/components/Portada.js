import React, { useState } from 'react';
import { Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ImageUploadModal from './ImageUploadModal';
import Layout from './Layout/Layout';

const previousPortadas = [
  { title: 'Portada 1', date: new Date('2023-01-01'), image: 'image1.jpg' },
  { title: 'Portada 2', date: new Date('2023-02-01'), image: 'image2.jpg' },
  { title: 'Portada 3', date: new Date('2023-03-01'), image: 'image3.jpg' },
];

function Portada() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedPortada, setSelectedPortada] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (data) => {
    setSubmittedData(data);
    setSelectedPortada(''); // Clear the dropdown selection after submission
  };

  const handlePortadaChange = (event) => {
    const selectedTitle = event.target.value;
    setSelectedPortada(selectedTitle);

    // Find the selected portada's data and set it as the submitted data
    const selectedData = previousPortadas.find((portada) => portada.title === selectedTitle);
    setSubmittedData(selectedData);
  };

  return (
    <Layout>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="select-portada-label">Select Previous Portada</InputLabel>
        <Select
          labelId="select-portada-label"
          value={selectedPortada}
          onChange={handlePortadaChange}
          label="Select Previous Portada"
        >
          {previousPortadas.map((portada) => (
            <MenuItem key={portada.title} value={portada.title}>
              {portada.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Editar
      </Button>
      
      <ImageUploadModal open={modalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />

      {submittedData && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h6">Submitted Data:</Typography>
          <Typography>Title: {submittedData.title}</Typography>
          <Typography>Date: {submittedData.date ? submittedData.date.toLocaleDateString() : ''}</Typography>
          {submittedData.image && (
            <img src={submittedData.image} alt="Uploaded" style={{ width: '100%', marginTop: 10 }} />
          )}
        </div>
      )}
    </Layout>
  );
}

export default Portada;
