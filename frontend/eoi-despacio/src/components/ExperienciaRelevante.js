import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, TextField, Grid } from '@mui/material';
import Slider from 'react-slick';
import SearchIcon from '@mui/icons-material/Search';

const mockedExperiences = [
  { id: 1, title: "Project Alpha", description: "Experience in large-scale urban mobility project." },
  { id: 2, title: "Project Beta", description: "Expertise in sustainable transport planning." },
  { id: 3, title: "Project Gamma", description: "Developed smart city solutions for traffic management." },
  { id: 4, title: "Project Delta", description: "Worked on integrating public transport systems." },
  // Add more mock experiences as needed
];

const ExperienciaRelevante = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [experiences, setExperiences] = useState(mockedExperiences);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredExperiences = mockedExperiences.filter((experience) =>
      experience.title.toLowerCase().includes(term) || experience.description.toLowerCase().includes(term)
    );
    setExperiences(filteredExperiences);
  };

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleAddExperience = (experience) => {
    console.log('Added experience:', experience);
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center" style={{ marginBottom: '20px' }}>
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search experiences..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>

      <div style={{ height: '400px' }}>
        <Slider {...settings}>
          {experiences.map((experience) => (
            <div key={experience.id}>
              <Card style={{ margin: '10px' }}>
                <CardContent>
                  <Typography variant="h6">{experience.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {experience.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddExperience(experience)}
                    style={{ marginTop: '10px' }}
                  >
                    Add to Document
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExperienciaRelevante;
