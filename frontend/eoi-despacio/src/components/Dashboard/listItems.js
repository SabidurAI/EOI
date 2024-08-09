import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Cargar RFEOI" />
    </ListItemButton>
    <ListItemButton component={Link} to="/portada">
      <ListItemIcon>
        <ContactPageIcon />
      </ListItemIcon>
      <ListItemText primary="Portada" />
    </ListItemButton>
    <ListItemButton component={Link} to="/carta-presentacion">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Carta de presentación" />
    </ListItemButton>
    <ListItemButton component={Link} to="/descripcion-compania">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Descripción de la compañía" sx={{ whiteSpace: 'normal' }} />
    </ListItemButton>
    <ListItemButton component={Link} to="/experiencia-relevante">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Experiencia relevante" />
    </ListItemButton>
    <ListItemButton component={Link} to="/expertas">
      <ListItemIcon>
        <Diversity2Icon />
      </ListItemIcon>
      <ListItemText primary="Expertas" />
    </ListItemButton>
    <ListItemButton component={Link} to="/proyectos-similares">
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Proyectos similares" />
    </ListItemButton>
    <ListItemButton component={Link} to="/entendimiento-proyecto">
      <ListItemIcon>
        <TextSnippetIcon />
      </ListItemIcon>
      <ListItemText primary="Cómo se entiende el proyecto" sx={{ whiteSpace: 'normal' }} />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      EOI
    </ListSubheader>
    <ListItemButton component={Link} to="/preview">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Preview" />
    </ListItemButton>
    <ListItemButton component={Link} to="/generar-documento">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Generar documento" />
    </ListItemButton>
  </React.Fragment>
);
