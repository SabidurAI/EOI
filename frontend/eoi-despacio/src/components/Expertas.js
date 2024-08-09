import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Button, Typography, TextField } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const employees = [
  { id: 1, name: 'John Doe', role: 'Engineer', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', role: 'Designer', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Alice Johnson', role: 'Manager', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Bob Brown', role: 'Developer', image: 'https://via.placeholder.com/150' },
  // Add more employees as needed
];

const Expertas = ({ onAddEmployee }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <TextField
        label="Search Employee"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Slider {...settings}>
        {filteredEmployees.map(employee => (
          <Card key={employee.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={employee.image}
              alt={employee.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {employee.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {employee.role}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onAddEmployee(employee)}
                sx={{ mt: 2 }}
              >
                Add to Document
              </Button>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Expertas;
