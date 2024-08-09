import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

// Sample projects data
const projects = [
  { id: 1, title: 'Project A', description: 'Description of Project A' },
  { id: 2, title: 'Project B', description: 'Description of Project B' },
  { id: 3, title: 'Project C', description: 'Description of Project C' },
  { id: 4, title: 'Project D', description: 'Description of Project D' },
];

const ProyectosSimilares = ({ onSelect }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    if (onSelect) {
      onSelect(project);
    }
  };

  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color={selectedProject?.id === project.id ? 'secondary' : 'primary'}
                  sx={{ marginTop: 2 }}
                  onClick={() => handleSelect(project)}
                >
                  {selectedProject?.id === project.id ? 'Selected' : 'Select'}
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProyectosSimilares;
