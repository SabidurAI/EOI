import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  InputLabel,
  IconButton,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function ImageUploadModal({ open, onClose, onSubmit }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = () => {
    // Create an object with the collected data
    const data = {
      image: selectedImage,
      title: title,
      date: selectedDate,
    };
    
    // Trigger the onSubmit callback with the collected data
    onSubmit(data);
    
    // Close the modal
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload Image and Details</DialogTitle>
      <DialogContent>
        {/* Image Upload Section */}
        <InputLabel htmlFor="upload-image" sx={{ display: 'block', marginBottom: 2 }}>
          Select an Image
        </InputLabel>
        <input
          accept="image/*"
          id="upload-image"
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="upload-image">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Selected" style={{ width: '100%', marginTop: 10 }} />
          </div>
        )}

        {/* Title Input Section */}
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Date Picker Section */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ImageUploadModal;
