import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export default function DocumentUploader() {
  const [selectedDocument, setSelectedDocument] = React.useState('');
  const [documents, setDocuments] = React.useState([
    'Document 1',
    'Document 2',
    'Document 3',
  ]);
  const [newDocument, setNewDocument] = React.useState(null);

  const handleSelectChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  const handleFileChange = (event) => {
    setNewDocument(event.target.files[0]);
  };

  const handleUpload = () => {
    if (newDocument) {
      setDocuments([...documents, newDocument.name]);
      setSelectedDocument(newDocument.name);
      alert(`Uploaded: ${newDocument.name}`);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
      <FormControl fullWidth>
        <InputLabel id="document-select-label">Select Document</InputLabel>
        <Select
          labelId="document-select-label"
          value={selectedDocument}
          label="Select Document"
          onChange={handleSelectChange}
        >
          {documents.map((doc, index) => (
            <MenuItem key={index} value={doc}>
              {doc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Upload New Document
      </Typography>
      <Button variant="contained" component="label">
        Choose File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>

      {newDocument && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          Selected File: {newDocument.name}
        </Typography>
      )}

      <Button variant="contained" color="primary" onClick={handleUpload} sx={{ mt: 2 }}>
        Upload Document
      </Button>
    </Box>
  );
}
